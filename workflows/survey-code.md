# Comprehensive Codebase Survey and Quality Analysis

This workflow combines redundancy analysis, legacy code review, and overengineering assessment. Use this for periodic codebase health checks or before major refactoring efforts.

## Step 1: Project Overview
Start by understanding the current project structure and scope.

```xml
<read_file>
<path>README.md</path>
</read_file>
```

```xml
<list_files>
<path>src</path>
<recursive>true</recursive>
</list_files>
```

Analyze:
- Project size and complexity
- Main technology stack
- File organization patterns
- Recent development activity

## Step 2: Redundancy Analysis
Survey the codebase for duplicate code and redundant functionality.

### Identify Duplicate Functions
```xml
<search_files>
<path>src</path>
<regex>(function|const|export)\s+(\w+)</regex>
<file_pattern>*.js</file_pattern>
</search_files>
```

```xml
<search_files>
<path>src</path>
<regex>(function|const|export)\s+(\w+)</regex>
<file_pattern>*.jsx</file_pattern>
</search_files>
```

Look for:
- Functions with similar names or purposes
- Duplicate utility functions across different files
- Similar component logic that could be abstracted
- Repeated validation or formatting logic

### Check for Duplicate Components
```xml
<search_files>
<path>src/components</path>
<regex>(export|function|const)\s+\w*Component</regex>
<file_pattern>*.jsx</file_pattern>
</search_files>
```

Identify:
- Components with similar functionality
- Duplicate UI patterns
- Similar state management logic
- Repeated prop handling patterns

### Analyze Import Redundancies
```xml
<search_files>
<path>src</path>
<regex>import.*from</regex>
<file_pattern>*.js*</file_pattern>
</search_files>
```

Check for:
- Unused imports
- Duplicate imports of the same modules
- Inconsistent import patterns
- Opportunities to consolidate imports

### Find Repeated Code Blocks
```xml
<search_files>
<path>src</path>
<regex>(if|for|while|try|catch)</regex>
<file_pattern>*.js*</file_pattern>
</search_files>
```

Look for:
- Similar conditional logic patterns
- Repeated error handling blocks
- Duplicate data processing logic
- Similar API call patterns

## Step 3: Legacy Code Review
Identify outdated patterns and functions that need modernization.

### Find Deprecated Patterns
```xml
<search_files>
<path>src</path>
<regex>(var\s|function\s\w+\(|\.bind\(this\)|componentDidMount|componentWillMount)</regex>
<file_pattern>*.js*</file_pattern>
</search_files>
```

Look for:
- `var` declarations (should be `let`/`const`)
- Old function declaration syntax
- Class component lifecycle methods
- `.bind(this)` patterns
- jQuery or other legacy library usage

### Check for Outdated Dependencies
```xml
<read_file>
<path>package.json</path>
</read_file>
```

Analyze:
- Dependencies that haven't been updated in years
- Libraries with known security vulnerabilities
- Packages that have been deprecated
- Dependencies that could be replaced with modern alternatives

### Identify Unused Code
```xml
<search_files>
<path>src</path>
<regex>(export|function|const|class)\s+\w+</regex>
<file_pattern>*.js*</file_pattern>
</search_files>
```

Find:
- Exported functions that are never imported
- Components that are never used
- Utility functions with no references
- Dead code branches

### Review Old Coding Patterns
```xml
<search_files>
<path>src</path>
<regex>(\.then\(|\.catch\(|callback|XMLHttpRequest)</regex>
<file_pattern>*.js*</file_pattern>
</search_files>
```

Look for:
- Promise chains that could use async/await
- Callback patterns that could be modernized
- Old AJAX patterns instead of fetch/axios
- Manual DOM manipulation instead of React patterns

## Step 4: Overengineering Assessment
Identify overly complex solutions that could be simplified.

### Find Complex Functions
```xml
<search_files>
<path>src</path>
<regex>function\s+\w+\([^)]*\)\s*\{</regex>
<file_pattern>*.js*</file_pattern>
</search_files>
```

Analyze functions for:
- Excessive parameters (>5 parameters)
- Very long functions (>50 lines)
- Deep nesting levels (>4 levels)
- Complex conditional logic

### Check for Unnecessary Abstractions
```xml
<search_files>
<path>src</path>
<regex>(abstract|interface|extends|implements)</regex>
<file_pattern>*.js*</file_pattern>
</search_files>
```

Look for:
- Over-abstracted class hierarchies
- Unnecessary design patterns
- Complex inheritance chains
- Interfaces with single implementations

### Identify Premature Optimizations
```xml
<search_files>
<path>src</path>
<regex>(useMemo|useCallback|React\.memo|shouldComponentUpdate)</regex>
<file_pattern>*.jsx</file_pattern>
</search_files>
```

Check for:
- Unnecessary memoization
- Over-optimization of simple components
- Complex caching for rarely-used data
- Performance optimizations without measurement

### Find Overly Complex State Management
```xml
<search_files>
<path>src</path>
<regex>(useReducer|createContext|Provider|dispatch)</regex>
<file_pattern>*.jsx</file_pattern>
</search_files>
```

Analyze:
- Complex state management for simple data
- Unnecessary context providers
- Over-engineered reducers for simple state
- Complex prop drilling solutions

## Step 5: Code Quality Assessment
Evaluate overall code quality and maintainability.

### Check Code Consistency
```xml
<search_files>
<path>src</path>
<regex>(console\.log|debugger|TODO|FIXME|HACK)</regex>
<file_pattern>*.js*</file_pattern>
</search_files>
```

Look for:
- Debug statements left in code
- TODO comments that should be addressed
- Inconsistent coding styles
- Missing error handling

### Analyze Test Coverage
```xml
<list_files>
<path>src/test</path>
<recursive>true</recursive>
</list_files>
```

```xml
<search_files>
<path>src</path>
<regex>(test\(|it\(|describe\(|expect\()</regex>
<file_pattern>*.test.js*</file_pattern>
</search_files>
```

Evaluate:
- Test coverage for critical functionality
- Missing tests for complex logic
- Outdated or broken tests
- Test quality and maintainability

## Step 6: Analysis Report Generation
Compile findings into actionable recommendations.

### Redundancy Report
Document:
- **Duplicate Functions**: List functions that could be consolidated
- **Similar Components**: Components that could be merged or abstracted
- **Repeated Patterns**: Code patterns that appear multiple times
- **Import Cleanup**: Opportunities to clean up imports

### Legacy Code Report
Document:
- **Deprecated Patterns**: Old coding patterns to modernize
- **Outdated Dependencies**: Libraries that need updating
- **Unused Code**: Dead code that can be removed
- **Modernization Opportunities**: Areas for modern JavaScript/React patterns

### Overengineering Report
Document:
- **Complex Functions**: Functions that could be simplified
- **Unnecessary Abstractions**: Over-engineered solutions
- **Premature Optimizations**: Performance code without justification
- **Simplification Opportunities**: Areas where simpler solutions would work

### Quality Improvement Plan
Prioritize improvements by:
1. **High Impact, Low Effort**: Quick wins that improve code quality
2. **Security Issues**: Outdated dependencies with vulnerabilities
3. **Performance Issues**: Code that impacts user experience
4. **Maintainability**: Code that makes development difficult

## Step 7: Recommendations Presentation
Present findings and recommendations:

```xml
<ask_followup_question>
<question>Codebase survey complete! Here's the analysis:

**REDUNDANCIES FOUND**:
[List of duplicate code and consolidation opportunities]

**LEGACY CODE IDENTIFIED**:
[List of outdated patterns and modernization needs]

**OVERENGINEERING DETECTED**:
[List of overly complex solutions that could be simplified]

**PRIORITY RECOMMENDATIONS**:
1. [Highest priority improvement]
2. [Second priority improvement]
3. [Third priority improvement]

**ESTIMATED EFFORT**:
- Quick wins (< 1 day): [List]
- Medium effort (1-3 days): [List]
- Large effort (> 3 days): [List]

Would you like to address any of these issues, or need more detail on specific findings?</question>
<options>["Address highest priority issue", "Get more detail on specific finding", "Create issues for all findings", "Focus on quick wins only"]</options>
</ask_followup_question>
```

## Integration Notes
This workflow can be used:
- As a standalone codebase health check
- Before major refactoring efforts
- As part of regular maintenance cycles
- To identify technical debt

## Quality Principles
Focus on:
- **Maintainability**: Code that's easy to understand and modify
- **Consistency**: Uniform patterns throughout the codebase
- **Simplicity**: Clear, straightforward solutions
- **Performance**: Efficient code without premature optimization
- **Security**: Up-to-date dependencies and secure patterns

This comprehensive survey helps maintain a healthy, maintainable codebase by identifying and addressing technical debt systematically.
