# Cline Workflows for Human-Centered Systems

This directory contains specialized Cline workflows designed to streamline development, maintain code quality, and ensure professional-grade issue resolution for the Human-Centered Systems website and Vibe Coding 101 workshop platform.

## Quick Start

**New to the project?** Start here:
1. Use `/next-issue.md` to find the highest priority work
2. Use `/analyze-issue.md` to thoroughly understand the issue
3. Use `/implement-clean.md` to plan clean, reusable code
4. Use `/fix-lifecycle.md` to execute and validate the complete solution

## Workflow Overview

### 🎯 Primary Development Workflows

#### [`next-issue.md`](./next-issue.md) - Issue Selection & Prioritization
**When to use**: Starting a new development session or looking for the next task
- Fetches and analyzes all open GitHub issues
- Provides priority-based recommendations
- Guides selection of highest-impact work
- Integrates with GitHub MCP tools for real-time issue data

#### [`analyze-issue.md`](./analyze-issue.md) - Comprehensive Issue Analysis
**When to use**: After selecting an issue, before implementation
- Deep dive into issue requirements and context
- Codebase analysis and dependency mapping
- Root cause identification and impact assessment
- Detailed implementation planning with testing strategy

#### [`implement-clean.md`](./implement-clean.md) - Clean Code Implementation Planning
**When to use**: After analyzing an issue, before coding
- Pattern consistency analysis across the codebase
- Code reuse identification and maximization
- Best practices enforcement and quality assurance
- Simplification opportunities and architectural alignment

#### [`fix-lifecycle.md`](./fix-lifecycle.md) - Complete Issue Resolution
**When to use**: For end-to-end issue resolution with full validation
- Pre-implementation baseline establishment
- Incremental testing and validation
- Comprehensive quality assurance
- GitHub issue closure with documentation

### 🔧 Specialized Workflows

#### [`survey-code.md`](./survey-code.md) - Codebase Health Analysis
**When to use**: Periodic code quality reviews or before major refactoring
- Redundancy analysis and duplicate code identification
- Legacy code review and modernization opportunities
- Overengineering assessment and simplification recommendations
- Technical debt prioritization and improvement planning

#### [`quick-bug.md`](./quick-bug.md) - Fast Bug Reporting
**When to use**: When discovering bugs during development work
- Rapid bug documentation without losing focus
- Consistent bug report formatting
- Priority assessment and impact analysis
- Integration with current development workflow

#### [`workshop-deploy.md`](./workshop-deploy.md) - Workshop Environment Management
**When to use**: Issues affecting Vibe Coding 101 workshop infrastructure
- Workshop-safe deployment planning
- Container and demo environment validation
- Student experience impact assessment
- Educational demonstration continuity assurance

## Workflow Integration

### Typical Development Flow
```
Start → /next-issue.md → /analyze-issue.md → /implement-clean.md → /fix-lifecycle.md → Complete
                                    ↓
                              /quick-bug.md (if bugs discovered)
                                    ↓
                              /workshop-deploy.md (if workshop-related)
```

### Quality Assurance Flow
```
Periodic Review → /survey-code.md → Identify Issues → /analyze-issue.md → Resolution Workflows
```

### Emergency Bug Flow
```
Bug Discovery → /quick-bug.md → Priority Assessment → /analyze-issue.md (if critical) → Resolution
```

## Key Features

### 🔗 GitHub Integration
All workflows leverage GitHub MCP tools for:
- Real-time issue fetching and analysis
- Automated issue creation and updates
- Comment addition and status tracking
- Label management and prioritization

### 🎯 Single-Issue Focus
Every workflow emphasizes:
- Working on one issue at a time
- Avoiding scope creep and feature drift
- Complete resolution before moving to next task
- Thorough testing and validation

### 🏗️ Code Quality Emphasis
Built-in quality assurance through:
- Pattern consistency enforcement
- Code reuse maximization
- Simplification over complexity
- Professional-grade documentation

### 🎓 Workshop Awareness
Special consideration for:
- Educational demonstration requirements
- Student experience continuity
- Container infrastructure stability
- Live workshop deployment safety

## Usage Guidelines

### Choosing the Right Workflow

**For Regular Development:**
- Start with `/next-issue.md` to find work
- Always use `/analyze-issue.md` for understanding
- Use `/implement-clean.md` for quality planning
- Complete with `/fix-lifecycle.md` for validation

**For Code Quality Reviews:**
- Use `/survey-code.md` for comprehensive analysis
- Follow up with regular development workflows for fixes

**For Bug Discovery:**
- Use `/quick-bug.md` for immediate documentation
- Escalate to analysis workflows if critical

**For Workshop Issues:**
- Use `/workshop-deploy.md` for specialized handling
- Integrate with other workflows as needed

### Best Practices

1. **Read the Workflow**: Each workflow includes detailed steps and examples
2. **Follow the Sequence**: Workflows are designed to build on each other
3. **Use GitHub Integration**: Leverage MCP tools for real-time data
4. **Focus on Quality**: Prioritize clean, maintainable code
5. **Document Everything**: Maintain clear records of decisions and changes

### Integration with Cline Rules

These workflows are designed to work with the project's `.clinerules`:
- Professional code quality standards
- Complete block implementation (no placeholders)
- Proper type hinting and documentation
- Methodical, step-by-step approach
- Focus on the primary purpose of each task

## Technical Requirements

### Prerequisites
- Cline with GitHub MCP server configured
- Access to `humancenteredsystems/site` repository
- Understanding of the project structure and tech stack

### MCP Tools Used
- `list_issues` - Fetch open issues
- `get_issue` - Get detailed issue information
- `get_issue_comments` - Retrieve issue discussions
- `create_issue` - Create new bug reports
- `add_issue_comment` - Add resolution documentation
- `update_issue` - Close resolved issues

### File System Integration
- `read_file` - Analyze existing code
- `search_files` - Find patterns and duplicates
- `list_files` - Understand project structure
- `replace_in_file` - Make targeted code changes
- `write_to_file` - Create new components

## Workflow Maintenance

### Updating Workflows
When modifying workflows:
1. Test changes with real issues
2. Update integration points between workflows
3. Maintain consistency in GitHub MCP tool usage
4. Update this README with any new patterns

### Adding New Workflows
For new specialized workflows:
1. Follow the established pattern structure
2. Include clear integration notes
3. Add GitHub MCP tool examples
4. Update the workflow overview in this README

## Support and Feedback

These workflows are designed to evolve with the project needs. For improvements or issues:
- Document workflow effectiveness during use
- Note any gaps or inefficiencies
- Suggest improvements based on real development experience
- Maintain focus on professional code quality and single-issue resolution

---

**Remember**: These workflows are tools to enhance development efficiency while maintaining the highest standards of code quality and professional development practices.
