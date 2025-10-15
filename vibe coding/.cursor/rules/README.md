# Claude Rules Template System

A comprehensive collection of development practice templates for different domains and technologies, designed to enforce consistent code quality, security, and operational excellence across all projects.

## 📋 Available Templates

### Core Development Templates

| Template | Description | File Types | Purpose |
|----------|-------------|------------|---------|
| **development.mdc** | General development practices and code quality standards | `**/*.js`, `**/*.ts`, `**/*.py`, `**/*.go`, `**/*.java`, `**/*.cs`, `**/*.php`, `**/*.rb`, `**/*.rs` | Universal coding standards, best practices, and quality assurance |
| **backend.mdc** | Backend development practices and API design standards | `**/*.js`, `**/*.ts`, `**/*.py`, `**/*.go`, `**/*.java`, `**/*.cs`, `**/*.php`, `**/*.rb`, `**/*.rs`, `**/api/**`, `**/server/**`, `**/backend/**` | API design, database management, microservices, security |
| **frontend.mdc** | Frontend development practices and user experience standards | `**/*.js`, `**/*.ts`, `**/*.jsx`, `**/*.tsx`, `**/*.vue`, `**/*.svelte`, `**/*.html`, `**/*.css`, `**/*.scss`, `**/*.sass`, `**/src/**`, `**/components/**`, `**/pages/**` | UI/UX, performance, accessibility, component architecture |

### Specialized Templates

| Template | Description | File Types | Purpose |
|----------|-------------|------------|---------|
| **mcp.mdc** | Model Context Protocol development and integration practices | `**/*.mcp`, `**/*mcp*`, `**/mcp/**`, `**/*.json`, `**/*.yaml`, `**/*.yml`, `**/server/**`, `**/client/**` | MCP server/client development, protocol compliance, security |
| **finetune.mdc** | AI model fine-tuning practices and machine learning standards | `**/*.py`, `**/*.ipynb`, `**/*.json`, `**/*.yaml`, `**/*.yml`, `**/data/**`, `**/models/**`, `**/training/**`, `**/finetune/**`, `**/*.pt`, `**/*.pth`, `**/*.h5`, `**/*.pkl` | ML model training, data management, model deployment |
| **ci.mdc** | CI/CD pipeline practices and DevOps automation standards | `**/.github/**`, `**/.gitlab-ci.yml`, `**/Jenkinsfile`, `**/azure-pipelines.yml`, `**/bitbucket-pipelines.yml`, `**/.circleci/**`, `**/Dockerfile`, `**/docker-compose.yml`, `**/k8s/**`, `**/kubernetes/**`, `**/*.yaml`, `**/*.yml`, `**/scripts/**`, `**/deploy/**` | Pipeline automation, deployment, infrastructure as code |
| **audit.mdc** | Code audit practices and security assessment standards | `**/*.js`, `**/*.ts`, `**/*.py`, `**/*.go`, `**/*.java`, `**/*.cs`, `**/*.php`, `**/*.rb`, `**/*.rs`, `**/*.sol`, `**/*.sql`, `**/*.yaml`, `**/*.yml`, `**/*.json`, `**/audit/**`, `**/security/**` | Security auditing, compliance, code review, risk assessment |

### Existing Templates

| Template | Description | File Types | Purpose |
|----------|-------------|------------|---------|
| **Solidity.mdc** | Solidity smart contract clean practices and project safety | `**/*.sol` | Blockchain development, smart contract security, DeFi practices |
| **nextjs.mdc** | Next.js frontend development practices | `**/*.js`, `**/*.ts`, `**/*.jsx`, `**/*.tsx` | React/Next.js specific practices and optimizations |
| **practices.mdc** | General coding practices and standards | Various | Universal coding practices and quality standards |
| **production.mdc** | Production deployment and operational practices | Various | Production readiness, monitoring, incident response |
| **rules.mdc** | Core development rules and guidelines | Various | Fundamental development principles and standards |

## 🚀 Quick Start

### 1. Choose Appropriate Templates

Select templates based on your project's technology stack and requirements:

```bash
# For a full-stack web application
- development.mdc (universal practices)
- backend.mdc (API and server-side code)
- frontend.mdc (UI and client-side code)
- ci.mdc (deployment and automation)

# For an AI/ML project
- development.mdc (general practices)
- finetune.mdc (model training and deployment)
- ci.mdc (ML pipeline automation)

# For a blockchain project
- development.mdc (general practices)
- Solidity.mdc (smart contract development)
- audit.mdc (security and compliance)
- ci.mdc (deployment automation)

# For MCP development
- development.mdc (general practices)
- mcp.mdc (MCP-specific practices)
- ci.mdc (deployment and automation)
```

### 2. Configure Template Application

Templates are automatically applied based on file patterns defined in the `globs` section. Each template includes:

- **File pattern matching** - Automatically applies to relevant files
- **Always apply** - Ensures consistent enforcement across all matching files
- **Comprehensive coverage** - Covers all aspects of development lifecycle

### 3. Customize for Your Project

While templates are comprehensive, you can customize them for specific project needs:

```yaml
# Example customization in template header
---
description: Custom Backend Development Practices for Our Project
globs:
  - "**/*.js"
  - "**/*.ts"
  - "**/api/**"
  - "**/server/**"
alwaysApply: true
---
```

## 📚 Template Structure

Each template follows a consistent structure with the following sections:

### 1. **Implementation Techniques**
- Core development practices and coding standards
- Language-specific best practices
- Architecture and design patterns

### 2. **Security & Best Practices**
- Security implementation guidelines
- Vulnerability prevention
- Secure coding practices

### 3. **Testing & Quality Assurance**
- Testing strategies and methodologies
- Quality gates and validation
- Continuous testing practices

### 4. **Performance & Optimization**
- Performance best practices
- Optimization techniques
- Monitoring and profiling

### 5. **Deployment & Operations**
- Deployment strategies
- Operational procedures
- Monitoring and maintenance

### 6. **Pre-Deployment Checklist**
- Comprehensive checklists for production readiness
- Quality gates and validation steps
- Compliance and security verification

### 7. **Naming Conventions**
- Consistent naming standards
- Language-specific conventions
- File and directory naming

## 🔧 Configuration

### Template Selection

Templates are automatically applied based on file patterns. To modify which templates apply:

1. **Edit glob patterns** in template headers
2. **Add new file types** to existing templates
3. **Create custom templates** for specific needs

### Customization

Each template can be customized for specific project requirements:

```yaml
---
description: Your Custom Description
globs:
  - "**/*.your-file-type"
  - "**/your-directory/**"
alwaysApply: true
---
```

### Integration with CI/CD

Templates integrate seamlessly with CI/CD pipelines:

- **Static analysis** - Automated code quality checks
- **Security scanning** - Vulnerability detection
- **Performance testing** - Automated performance validation
- **Compliance checking** - Regulatory requirement validation

## 📊 Benefits

### For Development Teams
- **Consistent Quality** - Standardized practices across all projects
- **Faster Onboarding** - Clear guidelines for new team members
- **Reduced Bugs** - Proactive quality and security practices
- **Better Performance** - Optimized code and deployment practices

### For Organizations
- **Compliance** - Built-in regulatory and security compliance
- **Risk Reduction** - Comprehensive security and quality practices
- **Cost Optimization** - Efficient development and deployment processes
- **Scalability** - Practices that scale with team and project growth

### For Projects
- **Production Ready** - Comprehensive pre-deployment checklists
- **Maintainable** - Clear documentation and best practices
- **Secure** - Built-in security practices and vulnerability prevention
- **Performant** - Optimization techniques and monitoring practices

## 🛠️ Usage Examples

### For a New Project

1. **Identify technology stack** and select appropriate templates
2. **Copy templates** to your project's `.cursor/rules/` directory
3. **Customize templates** for project-specific requirements
4. **Integrate with CI/CD** for automated enforcement

### For Existing Projects

1. **Audit current practices** against template standards
2. **Gradually adopt** template practices through code reviews
3. **Update CI/CD** to enforce template standards
4. **Train team** on new practices and standards

### For Team Onboarding

1. **Review relevant templates** with new team members
2. **Explain template structure** and enforcement mechanisms
3. **Provide examples** of template compliance
4. **Set up tooling** for automated template enforcement

## 🔄 Maintenance

### Regular Updates

- **Review templates** quarterly for new best practices
- **Update security practices** based on new threats and vulnerabilities
- **Incorporate feedback** from development teams
- **Update compliance requirements** as regulations change

### Version Control

- **Track template changes** in version control
- **Document updates** and rationale for changes
- **Maintain backward compatibility** where possible
- **Communicate changes** to development teams

### Continuous Improvement

- **Collect metrics** on template effectiveness
- **Gather feedback** from development teams
- **Analyze compliance** and quality improvements
- **Iterate and improve** based on real-world usage

## 📞 Support

### Getting Help

- **Review template documentation** for specific practices
- **Check pre-deployment checklists** for implementation guidance
- **Consult team leads** for project-specific customizations
- **Use CI/CD feedback** for automated quality checks

### Contributing

- **Submit improvements** to template practices
- **Report issues** with template enforcement
- **Suggest new templates** for additional domains
- **Share best practices** from successful implementations

## 📄 License

This template system is part of the Public-Github-Repo project and follows the same MIT License terms. See the main repository LICENSE file for details.

---

**Last Updated**: January 2025  
**Version**: 1.0.0  
**Maintainer**: Development Team
