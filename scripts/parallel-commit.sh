#!/bin/bash

# Parallel Git Commit Script
# Scans for changes and commits each file individually with parallel processing

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
BRIGHT='\033[1m'
NC='\033[0m' # No Color

# Configuration
MAX_CONCURRENT=5
DRY_RUN=false
COMMIT_PREFIX="feat"

# Function to print colored output
print_color() {
    local color=$1
    local message=$2
    echo -e "${color}${message}${NC}"
}

# Function to show help
show_help() {
    print_color $CYAN "Parallel Git Commit Script"
    print_color $CYAN "=========================="
    echo ""
    print_color $CYAN "Usage: $0 [options]"
    print_color $CYAN "Options:"
    print_color $CYAN "  --dry-run    Show what would be committed without actually committing"
    print_color $CYAN "  --help, -h   Show this help message"
    print_color $CYAN "  --max N      Set maximum concurrent commits (default: $MAX_CONCURRENT)"
    echo ""
    print_color $CYAN "Examples:"
    print_color $CYAN "  $0                    # Commit all changes"
    print_color $CYAN "  $0 --dry-run         # Preview what would be committed"
    print_color $CYAN "  $0 --max 3           # Use max 3 concurrent commits"
}

# Function to get commit message for a file
get_commit_message() {
    local file=$1
    local status=$2
    local filename=$(basename "$file")
    local dirname=$(dirname "$file" | sed 's|.*/||')
    
    case "$status" in
        *A*) echo "$COMMIT_PREFIX: add $filename" ;;
        *M*) echo "update: modify $filename" ;;
        *D*) echo "remove: delete $filename" ;;
        *R*) echo "refactor: rename $filename" ;;
        *) echo "chore: update $filename" ;;
    esac
    
    # Add directory context if meaningful
    if [[ "$dirname" != "." && "$dirname" != "" && ! "$dirname" =~ \. ]]; then
        echo " in $dirname"
    fi
}

# Function to commit a single file
commit_file() {
    local file="$1"
    local status="$2"
    local commit_msg=$(get_commit_message "$file" "$status")
    
    if [[ "$DRY_RUN" == "true" ]]; then
        print_color $YELLOW "[DRY RUN] Would commit: \"$file\" - \"$commit_msg\""
        return 0
    fi
    
    # Add the specific file with proper quoting for spaces
    if git add "$file" 2>/dev/null; then
        # Commit the file with proper quoting for the message
        if git commit -m "$commit_msg" 2>/dev/null; then
            print_color $GREEN "✅ Committed: \"$file\""
            return 0
        else
            print_color $RED "❌ Failed to commit \"$file\" (commit failed)"
            return 1
        fi
    else
        print_color $RED "❌ Failed to add \"$file\" to staging"
        return 1
    fi
}

# Function to process files in parallel
process_files_parallel() {
    local files=("$@")
    local pids=()
    local results=()
    local success_count=0
    local fail_count=0
    
    print_color $CYAN "⚡ Processing ${#files[@]} files with max $MAX_CONCURRENT concurrent commits..."
    
    for ((i=0; i<${#files[@]}; i+=MAX_CONCURRENT)); do
        # Start a batch of parallel processes
        for ((j=i; j<i+MAX_CONCURRENT && j<${#files[@]}; j++)); do
            local file_info="${files[j]}"
            local file=$(echo "$file_info" | cut -d'|' -f1)
            local status=$(echo "$file_info" | cut -d'|' -f2)
            
            # Properly quote the file path for spaces
            commit_file "$file" "$status" &
            pids+=($!)
        done
        
        # Wait for this batch to complete
        for pid in "${pids[@]}"; do
            wait $pid
            local exit_code=$?
            if [[ $exit_code -eq 0 ]]; then
                ((success_count++))
            else
                ((fail_count++))
            fi
        done
        
        # Clear pids array for next batch
        pids=()
    done
    
    print_color $BRIGHT "📊 Summary:"
    print_color $BLUE "Total files processed: ${#files[@]}"
    print_color $GREEN "Successfully committed: $success_count"
    if [[ $fail_count -gt 0 ]]; then
        print_color $RED "Failed: $fail_count"
    else
        print_color $GREEN "Failed: $fail_count"
    fi
}

# Parse command line arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        --dry-run)
            DRY_RUN=true
            shift
            ;;
        --help|-h)
            show_help
            exit 0
            ;;
        --max)
            MAX_CONCURRENT="$2"
            shift 2
            ;;
        *)
            print_color $RED "Unknown option: $1"
            show_help
            exit 1
            ;;
    esac
done

# Main execution
print_color $BRIGHT "🚀 Parallel Git Commit Script"
print_color $BRIGHT "=============================="

if [[ "$DRY_RUN" == "true" ]]; then
    print_color $YELLOW "🔍 DRY RUN MODE - No actual commits will be made"
fi

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    print_color $RED "❌ Not in a git repository!"
    exit 1
fi

# Get changed files
print_color $BLUE "🔍 Scanning for changed files..."
changed_files=()

while IFS= read -r line; do
    if [[ -n "$line" ]]; then
        status="${line:0:2}"
        file="${line:3}"
        
        # Clean up any existing quotes from git status output
        file=$(echo "$file" | sed 's/^["'\'']\|["'\'']$//g')
        
        # Skip excluded patterns
        if [[ "$file" =~ node_modules/ ]] || 
           [[ "$file" =~ \.git/ ]] || 
           [[ "$file" =~ \.log$ ]] || 
           [[ "$file" =~ \.tmp$ ]] || 
           [[ "$file" =~ \.DS_Store$ ]] || 
           [[ "$file" =~ Thumbs\.db$ ]]; then
            continue
        fi
        
        changed_files+=("$file|$status")
    fi
done < <(git status --porcelain)

if [[ ${#changed_files[@]} -eq 0 ]]; then
    print_color $GREEN "✅ No changes to commit"
    exit 0
fi

print_color $BLUE "Found ${#changed_files[@]} changed files:"
for file_info in "${changed_files[@]}"; do
    file=$(echo "$file_info" | cut -d'|' -f1)
    status=$(echo "$file_info" | cut -d'|' -f2)
    
    case "$status" in
        *A*) icon="🆕" ;;
        *M*) icon="📝" ;;
        *D*) icon="🗑️" ;;
        *R*) icon="🔄" ;;
        *) icon="❓" ;;
    esac
    
    print_color $BLUE "  $icon \"$file\" ($status)"
done

# Process commits
process_files_parallel "${changed_files[@]}"

if [[ "$DRY_RUN" == "false" ]]; then
    print_color $GREEN "🎉 All commits completed!"
fi
