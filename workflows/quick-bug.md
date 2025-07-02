# Quick Bug Report Creation Workflow

This workflow provides fast, consistent bug reporting when you discover issues during development. Use this to quickly document bugs without losing focus on your current work.

## Step 1: Gather Bug Context
Collect essential information about the bug you've discovered.

### Current Work Context
Document:
- What you were working on when you found the bug
- Current file/component being developed
- Steps that led to discovering the bug
- Whether this blocks your current work

### Bug Details
Capture:
- **Expected Behavior**: What should happen
- **Actual Behavior**: What currently happens
- **Environment**: Browser, device, or conditions where bug occurs
- **Severity**: How critical is this bug?
  - Critical: Breaks core functionality
  - High: Significant impact on user experience
  - Medium: Noticeable but workaround exists
  - Low: Minor cosmetic or edge case issue

## Step 2: Reproduction Steps
Create clear, step-by-step instructions to reproduce the bug.

### Document Steps
1. **Starting Point**: What page/state to begin from
2. **User Actions**: Specific clicks, inputs, or interactions
3. **Expected Result**: What should happen at each step
4. **Actual Result**: What actually happens
5. **Additional Context**: Any relevant browser console errors, network issues, etc.

### Test Reproduction
Quickly verify the reproduction steps work:
- Follow your own steps to confirm the bug
- Note any variations or additional conditions
- Check if bug occurs in different browsers/devices (if relevant)

## Step 3: Impact Assessment
Quickly assess the bug's impact and priority.

### User Impact
- Does this affect core functionality?
- How many users would encounter this?
- Is there a workaround available?
- Does this break the user experience flow?

### Development Impact
- Does this block current development work?
- Is this related to recent changes?
- Could this indicate a larger systemic issue?
- Should this be fixed before next deployment?

### Priority Determination
- **P0 (Critical)**: Breaks core functionality, no workaround
- **P1 (High)**: Significant impact, affects many users
- **P2 (Medium)**: Moderate impact, workaround available
- **P3 (Low)**: Minor impact, cosmetic or edge case

## Step 4: Create GitHub Issue
Use GitHub MCP tools to create a well-formatted bug report.

### Issue Creation
```
<use_mcp_tool>
<server_name>github.com/github/github-mcp-server</server_name>
<tool_name>create_issue</tool_name>
<arguments>
{
  "owner": "humancenteredsystems",
  "repo": "site",
  "title": "[BUG] [Brief description of the issue]",
  "body": "## Bug Description\n[Clear description of what's wrong]\n\n## Steps to Reproduce\n1. [Step 1]\n2. [Step 2]\n3. [Step 3]\n\n## Expected Behavior\n[What should happen]\n\n## Actual Behavior\n[What currently happens]\n\n## Environment\n- Browser: [Browser and version]\n- Device: [Desktop/Mobile/Tablet]\n- OS: [Operating system]\n\n## Additional Context\n[Any relevant console errors, screenshots, or additional information]\n\n## Impact\n[Description of user/business impact]\n\n## Discovered During\n[What work was being done when this was found]",
  "labels": ["bug", "[priority-label]", "[component-label]"]
}
</arguments>
</use_mcp_tool>
```

### Label Selection
Choose appropriate labels:
- **Type**: `bug` (always included)
- **Priority**: `priority-critical`, `priority-high`, `priority-medium`, `priority-low`
- **Component**: `frontend`, `backend`, `workshop`, `deployment`, `ui-ux`
- **Status**: `needs-investigation`, `ready-to-fix`, `blocked`

## Step 5: Link to Current Work
If the bug is related to your current development work, establish the connection.

### Related Issue Linking
If working on another issue:
```
<use_mcp_tool>
<server_name>github.com/github/github-mcp-server</server_name>
<tool_name>add_issue_comment</tool_name>
<arguments>
{
  "owner": "humancenteredsystems",
  "repo": "site",
  "issue_number": [CURRENT_ISSUE_NUMBER],
  "body": "Related bug discovered during work on this issue: #[NEW_BUG_ISSUE_NUMBER]\n\nThis [does/does not] block completion of the current issue."
}
</arguments>
</use_mcp_tool>
```

### Cross-Reference
Add reference in the new bug issue:
```
<use_mcp_tool>
<server_name>github.com/github/github-mcp-server</server_name>
<tool_name>add_issue_comment</tool_name>
<arguments>
{
  "owner": "humancenteredsystems",
  "repo": "site",
  "issue_number": [NEW_BUG_ISSUE_NUMBER],
  "body": "Discovered while working on issue #[CURRENT_ISSUE_NUMBER]"
}
</arguments>
</use_mcp_tool>
```

## Step 6: Decision Point
Determine how to handle the bug in relation to current work.

### Decision Matrix
```xml
<ask_followup_question>
<question>Bug report created: #[ISSUE_NUMBER]

**Bug**: [Brief description]
**Priority**: [Priority level]
**Impact**: [Impact description]

How should this be handled in relation to your current work?</question>
<options>["Fix this bug now (blocks current work)", "Note for later (doesn't block current work)", "Investigate further before deciding", "Escalate for immediate attention"]</options>
</ask_followup_question>
```

### Action Based on Decision
- **Fix Now**: Switch focus to bug resolution using `/analyze-issue.md`
- **Note for Later**: Add to backlog, continue current work
- **Investigate**: Use `/analyze-issue.md` to understand scope before deciding
- **Escalate**: Add urgent labels and notify team

## Step 7: Documentation and Tracking
Ensure the bug is properly tracked and documented.

### Update Current Work Log
If working on another issue, document the discovery:
- Note the bug was found during current work
- Record any impact on current timeline
- Update current issue with cross-reference

### Team Communication
For high-priority bugs:
- Consider immediate team notification
- Update project status if this affects deliverables
- Document any workarounds for immediate use

## Integration Notes
This workflow integrates with:
- Current development work (any ongoing issue)
- `/analyze-issue.md` if immediate investigation needed
- `/next-issue.md` if this becomes the next priority
- Team communication and project management tools

## Quality Standards
Ensure bug reports include:
- **Clear Title**: Descriptive and searchable
- **Reproduction Steps**: Anyone can follow them
- **Expected vs Actual**: Clear comparison
- **Impact Assessment**: Business and user impact
- **Proper Labels**: For filtering and prioritization
- **Context**: How it was discovered

## Time Investment
This workflow should take:
- **Simple bugs**: 2-3 minutes
- **Complex bugs**: 5-7 minutes
- **Critical bugs**: 10+ minutes (includes investigation)

The goal is to quickly capture essential information without losing momentum on current work, while ensuring the bug is properly documented for future resolution.
