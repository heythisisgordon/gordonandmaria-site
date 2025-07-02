# Clean Implementation Planning Workflow

This workflow ensures pattern consistency, maximizes code reuse, and follows best practices. Use this after analyzing an issue to create a detailed, clean implementation plan.

## Step 1: Pattern Analysis
Survey existing code patterns in the affected areas to ensure consistency.

### Analyze Existing Patterns
```xml
<read_file>
<path>src/components</path>
</read_file>
```

```xml
<search_files>
<path>src</path>
<regex>(function|const|class|export)</regex>
<file_pattern>*.jsx</file_pattern>
</search_files>
```

Identify:
- Component structure patterns (functional vs class, hooks usage)
- Styling approaches (CSS modules, Tailwind classes, inline styles)
- State management patterns
- Error handling patterns
- Import/export conventions
- File naming conventions

### Check for Reusable Code
```xml
<search_files>
<path>src</path>
<regex>[relevant-function-pattern]</regex>
<file_pattern>*.js</file_pattern>
</search_files>
```

Look for:
- Existing utility functions that can be reused
- Similar components that can be extended
- Shared hooks or custom logic
- Common validation patterns
- Existing API integration patterns

## Step 2: Code Reuse Opportunities
Identify opportunities to augment existing files vs. creating new ones.

### Existing File Enhancement
For each affected area, determine:
- Can we add a function to an existing utility file?
- Can we extend an existing component with new props?
- Can we enhance an existing hook with additional functionality?
- Can we reuse existing validation or API logic?

### New File Justification
Only create new files when:
- Functionality is truly unique and doesn't fit existing patterns
- File would become too large or complex if extended
- New file follows established project structure
- Clear separation of concerns is maintained

## Step 3: Best Practices Review
Ensure adherence to project coding standards and identify simplification opportunities.

### Code Quality Checklist
- **DRY Principle**: No duplicate code or logic
- **Single Responsibility**: Each function/component has one clear purpose
- **Consistent Naming**: Follows project naming conventions
- **Proper Abstractions**: Not over-engineered, not under-engineered
- **Error Handling**: Consistent error handling patterns
- **Performance**: No unnecessary re-renders or computations
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Testing**: Testable code structure

### Simplification Opportunities
Look for ways to:
- Reduce complexity without losing functionality
- Eliminate unnecessary abstractions
- Combine similar functions or components
- Use existing libraries instead of custom implementations
- Simplify conditional logic or data transformations

## Step 4: Implementation Strategy Planning
Create a detailed plan that maximizes code reuse and follows established patterns.

### File Modification Plan
For each file to be modified:
```
File: [path/to/file.jsx]
Purpose: [What this file does]
Changes:
- Add function: [function-name] - [purpose]
- Modify function: [function-name] - [changes]
- Import: [new-dependencies]
Reuse: [What existing code/patterns are being reused]
Pattern Consistency: [How this follows existing patterns]
```

### New File Creation Plan
For each new file (if absolutely necessary):
```
File: [path/to/new-file.jsx]
Purpose: [Why this new file is needed]
Structure: [How it follows existing file patterns]
Dependencies: [What it imports/uses from existing code]
Integration: [How it connects to existing components]
```

### Code Reuse Documentation
```
Reused Components:
- [Component Name]: [How it's being reused/extended]

Reused Utilities:
- [Utility Function]: [How it's being leveraged]

Reused Patterns:
- [Pattern Name]: [How it's being applied]
```

## Step 5: Quality Assurance Plan
Ensure the implementation maintains high code quality.

### Pre-Implementation Checks
- [ ] All reuse opportunities identified and planned
- [ ] No duplicate functionality being created
- [ ] Follows established project patterns
- [ ] Maintains consistent code style
- [ ] Proper error handling planned
- [ ] Accessibility considerations included

### Implementation Guidelines
- Write code that matches existing style and patterns
- Use existing utility functions and components where possible
- Follow established naming conventions
- Maintain consistent file structure
- Include proper TypeScript types (if applicable)
- Add appropriate comments for complex logic

### Post-Implementation Validation
- [ ] Code follows project patterns
- [ ] No code duplication introduced
- [ ] Proper abstractions used (not over/under-engineered)
- [ ] All reuse opportunities utilized
- [ ] Consistent with existing codebase style

## Step 6: Implementation Plan Presentation
Present the detailed, clean implementation plan:

```xml
<ask_followup_question>
<question>Here's the clean implementation plan:

**Pattern Analysis**:
[Summary of existing patterns to follow]

**Code Reuse Strategy**:
[List of existing code/components to reuse]

**File Modification Plan**:
[Detailed plan for each file to modify]

**New Files** (if any):
[Justification and plan for new files]

**Quality Assurance**:
[How this maintains code quality and consistency]

This plan maximizes code reuse, follows existing patterns, and maintains clean architecture. Ready to proceed with implementation?</question>
<options>["Yes, proceed with implementation", "Refine the reuse strategy", "Simplify the approach further", "Review pattern consistency"]</options>
</ask_followup_question>
```

## Integration Notes
This workflow should be used:
- After `/analyze-issue.md` for implementation planning
- Before `/fix-lifecycle.md` for execution
- As a quality gate before any significant code changes

## Quality Principles
Remember to always:
- **Reuse before creating**: Look for existing solutions first
- **Extend before replacing**: Enhance existing code when possible
- **Simplify before optimizing**: Clear code is better than clever code
- **Consistent before creative**: Follow established patterns
- **Tested before deployed**: Ensure quality through testing

This workflow ensures that every implementation is clean, consistent, and leverages the existing codebase effectively.
