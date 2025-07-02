# Next Issue Selection Workflow

You have access to GitHub MCP tools. Read README.md for project context, then find and analyze the highest priority open issue.

## Step 1: Project Context
First, read the README.md file to understand the project structure and current state.

## Step 2: Fetch Open Issues
Use GitHub MCP tools to get all open issues from the repository. Focus only on OPEN issues.

```
<use_mcp_tool>
<server_name>github.com/github/github-mcp-server</server_name>
<tool_name>list_issues</tool_name>
<arguments>
{
  "owner": "humancenteredsystems",
  "repo": "site",
  "state": "open",
  "sort": "updated",
  "direction": "desc",
  "perPage": 50
}
</arguments>
</use_mcp_tool>
```

## Step 3: Priority Analysis
Analyze the open issues based on:
- Priority labels (high, medium, low)
- Issue age and last activity
- Impact on core functionality
- Relationship to current development goals
- Urgency indicators in titles/descriptions

## Step 4: Present Recommendations
Present the top 3 highest priority issues with:
- Issue number and title
- Brief description of the problem
- Why it's high priority
- Estimated complexity/effort
- Potential impact if not addressed

## Step 5: User Selection
Ask the user which approach they want to take:

```xml
<ask_followup_question>
<question>Based on the open issues analysis, here are the top priority candidates:

[Present top 3 issues with justification]

What would you like to do next?</question>
<options>["Analyze issue #[highest priority]", "Analyze a different issue (specify number)", "Compare two specific issues", "See full issue list"]</options>
</ask_followup_question>
```

## Step 6: Next Action
Based on user selection:
- If analyzing specific issue: Recommend using `/analyze-issue.md` workflow
- If comparing issues: Provide detailed comparison
- If seeing full list: Present organized list by category/priority

## Integration Notes
This workflow serves as the primary entry point and should flow naturally into:
- `/analyze-issue.md` for deep dive analysis
- Direct issue comparison for decision making
- Issue board organization and prioritization

Remember: Focus on ONE issue at a time for maximum effectiveness.
