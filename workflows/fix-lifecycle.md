# Complete Issue Resolution Lifecycle Workflow

This workflow manages the end-to-end process of resolving an issue, from pre-implementation testing through GitHub issue closure. Use this after creating a clean implementation plan.

## Phase 1: Pre-Implementation Baseline

### Step 1: Establish Current State
Document the current behavior before making any changes.

```xml
<execute_command>
<command>npm test</command>
<requires_approval>false</requires_approval>
</execute_command>
```

Document:
- Current test results (pass/fail counts)
- Any existing failures unrelated to the issue
- Current application behavior in affected areas
- Performance baseline (if relevant)

### Step 2: Create Issue Reproduction
Create clear steps to reproduce the issue:

1. **Environment Setup**: Document any specific setup needed
2. **Reproduction Steps**: Step-by-step instructions to trigger the issue
3. **Expected Behavior**: What should happen
4. **Actual Behavior**: What currently happens
5. **Screenshots/Logs**: Capture evidence of the issue

### Step 3: Define Success Criteria
Establish clear, measurable criteria for resolution:
- [ ] Specific functionality works as expected
- [ ] No regressions in related functionality
- [ ] All existing tests continue to pass
- [ ] New tests pass (if applicable)
- [ ] Performance impact is acceptable
- [ ] Accessibility requirements met

## Phase 2: Implementation

### Step 4: Execute Implementation Plan
Follow the clean implementation plan created in previous workflow.

**Implementation Guidelines:**
- Make changes incrementally, testing after each major change
- Commit frequently with descriptive messages
- Focus solely on the issue at hand (no scope creep)
- Follow established code patterns and reuse existing code
- Add comments for complex logic

### Step 5: Incremental Testing
Test changes as you implement them:

```xml
<execute_command>
<command>npm run dev</command>
<requires_approval>false</requires_approval>
</execute_command>
```

For each major change:
- Test the specific functionality modified
- Verify no obvious regressions
- Check console for errors
- Validate against success criteria

### Step 6: Handle Discovered Issues
If you discover additional issues during implementation:

**For Related Issues:**
- Document them but stay focused on current issue
- Note them for future resolution
- Only fix if they directly block current issue resolution

**For Unrelated Issues:**
- Use `/quick-bug.md` workflow to create new GitHub issues
- Do not fix unrelated issues in this implementation
- Maintain focus on single issue resolution

## Phase 3: Comprehensive Validation

### Step 7: Full Test Suite
Run complete test suite to ensure no regressions:

```xml
<execute_command>
<command>npm test</command>
<requires_approval>false</requires_approval>
</execute_command>
```

Verify:
- All existing tests still pass
- Any new tests pass
- No new test failures introduced
- Test coverage maintained or improved

### Step 8: Manual Testing
Perform comprehensive manual testing:

**Core Functionality:**
- Test the specific issue resolution
- Verify all success criteria are met
- Test edge cases and error conditions

**Regression Testing:**
- Test related functionality
- Check integration points
- Verify user workflows still work
- Test on different screen sizes/browsers (if UI changes)

**Performance Testing:**
- Check for performance regressions
- Verify loading times are acceptable
- Monitor memory usage (if relevant)

### Step 9: Code Quality Review
Perform final code quality check:

```xml
<execute_command>
<command>npm run lint</command>
<requires_approval>false</requires_approval>
</execute_command>
```

Review:
- Code follows project patterns
- No code duplication introduced
- Proper error handling implemented
- Comments added where needed
- No debugging code left behind

## Phase 4: Documentation and Closure

### Step 10: Update Documentation
Update any relevant documentation:
- README.md (if functionality changed)
- Code comments (for complex logic)
- API documentation (if backend changes)
- User-facing documentation (if UI/UX changes)

### Step 11: Prepare GitHub Issue Update
Document the resolution for the GitHub issue:

**Resolution Summary:**
- Brief description of what was fixed
- Root cause explanation
- Solution approach taken
- Files modified
- Testing performed

**Validation Evidence:**
- Screenshots showing fix working
- Test results
- Performance impact (if any)
- Any breaking changes (should be none for bug fixes)

### Step 12: Close GitHub Issue
Update and close the GitHub issue:

```
<use_mcp_tool>
<server_name>github.com/github/github-mcp-server</server_name>
<tool_name>add_issue_comment</tool_name>
<arguments>
{
  "owner": "humancenteredsystems",
  "repo": "site",
  "issue_number": [ISSUE_NUMBER],
  "body": "## Issue Resolution\n\n**Root Cause**: [Explanation]\n\n**Solution**: [What was implemented]\n\n**Files Modified**:\n- [List of files]\n\n**Testing**: [Testing performed]\n\n**Validation**: [How success was verified]\n\nIssue has been resolved and tested. All success criteria met with no regressions introduced."
}
</arguments>
</use_mcp_tool>
```

```
<use_mcp_tool>
<server_name>github.com/github/github-mcp-server</server_name>
<tool_name>update_issue</tool_name>
<arguments>
{
  "owner": "humancenteredsystems",
  "repo": "site",
  "issue_number": [ISSUE_NUMBER],
  "state": "closed"
}
</arguments>
</use_mcp_tool>
```

## Phase 5: Final Validation

### Step 13: Post-Resolution Check
Perform final validation:

```xml
<ask_followup_question>
<question>Issue resolution complete! Here's the summary:

**Issue**: #[NUMBER] - [TITLE]
**Root Cause**: [Brief explanation]
**Solution**: [What was implemented]
**Files Modified**: [List]
**Testing**: [What was tested]
**Result**: [Success criteria met]

Final validation checklist:
- [ ] Original issue is resolved
- [ ] No new failures introduced
- [ ] All tests pass
- [ ] Code quality maintained
- [ ] GitHub issue closed with documentation

Is this resolution complete and satisfactory?</question>
<options>["Yes, resolution complete", "Need additional testing", "Found regression issue", "Documentation needs update"]</options>
</ask_followup_question>
```

### Step 14: Prepare for Next Issue
Clean up and prepare for next development cycle:
- Commit and push all changes
- Clean up any temporary files
- Update local issue tracking
- Prepare development environment for next issue

## Quality Gates
Throughout the lifecycle, ensure:
- **Single Issue Focus**: No scope creep or unrelated changes
- **No Regressions**: Existing functionality remains intact
- **Complete Testing**: Both automated and manual testing performed
- **Proper Documentation**: Changes are properly documented
- **Clean Closure**: GitHub issue properly closed with evidence

## Integration Notes
This workflow should be used:
- After `/implement-clean.md` for execution
- As the final step in issue resolution
- Before starting work on the next issue

## Success Metrics
A successful resolution includes:
- Original issue completely resolved
- All success criteria met
- No new test failures
- No performance regressions
- Proper documentation and closure
- Clean, maintainable code

This workflow ensures thorough, professional issue resolution with complete validation and documentation.
