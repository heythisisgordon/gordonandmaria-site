# Issue Analysis Workflow

You have access to GitHub MCP tools and the full codebase. This workflow provides comprehensive analysis of a specific issue, matching the pattern: "Read README.md, study files related to the issue, and plan how to fix it."

## Step 1: Project Familiarization
Read README.md to understand the project structure, tech stack, and current state.

```xml
<read_file>
<path>README.md</path>
</read_file>
```

## Step 2: Fetch Issue Details
Use GitHub MCP tools to get detailed information about the specific issue.

```
<use_mcp_tool>
<server_name>github.com/github/github-mcp-server</server_name>
<tool_name>get_issue</tool_name>
<arguments>
{
  "owner": "humancenteredsystems",
  "repo": "site",
  "issue_number": [ISSUE_NUMBER]
}
</arguments>
</use_mcp_tool>
```

Also get any comments on the issue:

```
<use_mcp_tool>
<server_name>github.com/github/github-mcp-server</server_name>
<tool_name>get_issue_comments</tool_name>
<arguments>
{
  "owner": "humancenteredsystems",
  "repo": "site",
  "issue_number": [ISSUE_NUMBER]
}
</arguments>
</use_mcp_tool>
```

## Step 3: Identify Affected Components
Based on the issue description, identify which files and components are likely affected:
- Extract file paths mentioned in the issue
- Identify components/pages referenced
- Determine if it's frontend, backend, or full-stack issue
- Check if it affects workshop demo components

## Step 4: Codebase Analysis
Read and analyze the relevant files:

```xml
<read_file>
<path>[identified-file-path]</path>
</read_file>
```

Use search_files to find related code patterns:

```xml
<search_files>
<path>src</path>
<regex>[relevant-search-pattern]</regex>
<file_pattern>*.jsx</file_pattern>
</search_files>
```

## Step 5: Dependency and Integration Analysis
- Trace how the affected components integrate with other parts
- Check for shared utilities or components that might be impacted
- Identify test files that cover the affected functionality
- Review recent changes that might be related

## Step 6: Impact Assessment
Analyze the potential impact:
- **Scope**: What parts of the application are affected?
- **Severity**: How critical is this issue for users?
- **Complexity**: How difficult will the fix be?
- **Risk**: What could break if we fix this incorrectly?
- **Testing**: What testing strategy is needed?

## Step 7: Root Cause Analysis
Based on the code analysis:
- Identify the root cause of the issue
- Determine if it's a bug, missing feature, or design problem
- Check if there are similar issues elsewhere in the codebase
- Assess if this is symptomatic of a larger architectural issue

## Step 8: Solution Strategy
Develop a comprehensive fix strategy:
- **Approach**: How should this be fixed?
- **Pattern Consistency**: Ensure solution follows existing code patterns
- **Code Reuse**: Identify opportunities to reuse existing functions/components
- **File Strategy**: Determine whether to modify existing files or create new ones
- **Testing Strategy**: Plan for before/after testing

## Step 9: Implementation Plan
Create a detailed, step-by-step implementation plan:

1. **Pre-implementation**:
   - Establish baseline (run existing tests, document current behavior)
   - Create reproduction steps for the issue
   - Set clear success criteria

2. **Implementation Steps**:
   - List specific files to modify
   - Detail the changes needed in each file
   - Identify any new files that need to be created
   - Plan the order of changes to minimize breakage

3. **Testing Plan**:
   - Unit tests to verify the fix
   - Integration tests to ensure no regressions
   - Manual testing steps to validate the solution

4. **Validation Criteria**:
   - How to verify the root cause is addressed
   - How to confirm no new failures are introduced
   - Success metrics for the fix

## Step 10: Plan Presentation
Present the comprehensive plan to the user:

```xml
<ask_followup_question>
<question>Based on my analysis of issue #[NUMBER], here's my assessment:

**Root Cause**: [Detailed explanation]

**Proposed Solution**: [High-level approach]

**Implementation Plan**:
[Detailed step-by-step plan]

**Testing Strategy**: [Before/after testing approach]

**Risk Assessment**: [Potential issues and mitigation]

This plan focuses on just this one issue and covers the complete lifecycle including testing and GitHub issue closure. Ready to proceed to implementation planning?</question>
<options>["Yes, create detailed implementation plan", "Need more analysis on specific aspect", "Switch to different issue", "Proceed directly to implementation"]</options>
</ask_followup_question>
```

## Integration Notes
This workflow should be followed by:
- `/implement-clean.md` for detailed implementation planning
- `/fix-lifecycle.md` for end-to-end execution
- Direct transition to ACT MODE for implementation

## Quality Checkpoints
Throughout the analysis, ensure:
- Focus remains on the single issue (don't scope creep)
- Solution follows existing project patterns
- Opportunities for code reuse are identified
- Implementation plan is precise, thorough, and complete
- Testing strategy covers both positive and negative cases

Remember: We want to thoroughly examine all relevant code in PLAN MODE before switching to ACT MODE to maximize odds of success.
