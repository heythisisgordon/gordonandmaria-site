# Workshop Deployment Workflow

This workflow handles issues specific to the Vibe Coding 101 workshop environment. Use this when working on issues that affect workshop demos, containers, or deployment infrastructure.

## Step 1: Workshop Context Analysis
Read the workshop documentation to understand the current state and requirements.

```xml
<read_file>
<path>plans/VC-101.md</path>
</read_file>
```

```xml
<read_file>
<path>README.md</path>
</read_file>
```

Analyze:
- Current workshop deployment status
- Demo environment requirements
- Container infrastructure setup
- Student-facing components affected
- Deployment pipeline implications

## Step 2: Issue Classification
Determine the type of workshop issue and its scope.

### Workshop Issue Types
- **Demo Environment**: Issues affecting code-server containers or VS Code setup
- **Student Experience**: Problems with workshop flow, UI, or accessibility
- **Deployment Pipeline**: Issues with GitHub Pages, Render deployment, or automation
- **Demo Content**: Problems with starter projects or demo scenarios
- **Infrastructure**: Container health, monitoring, or scaling issues

### Impact Assessment
Evaluate impact on:
- **Workshop Delivery**: Does this affect live workshop presentation?
- **Student Experience**: How does this impact student learning?
- **Demo Flow**: Does this break the demonstration narrative?
- **Deployment**: Does this affect the ability to deploy changes?
- **Container Health**: Does this impact container stability or performance?

## Step 3: Workshop-Specific Analysis
Analyze the issue in the context of workshop requirements.

### Demo Environment Considerations
```xml
<list_files>
<path>workshop-demo</path>
<recursive>true</recursive>
</list_files>
```

Check:
- Container configuration and health
- VS Code settings and extensions
- Cline AI integration
- Demo project integrity
- Deployment automation

### Student-Facing Impact
```xml
<search_files>
<path>src/pages</path>
<regex>InfoSession|StudentShowcase</regex>
<file_pattern>*.jsx</file_pattern>
</search_files>
```

Analyze:
- Vibe Coding 101 submission system
- Student showcase functionality
- Password protection and access control
- File upload and processing
- User experience flow

### Deployment Pipeline Analysis
```xml
<list_files>
<path>workshop-deployment-package</path>
<recursive>true</recursive>
</list_files>
```

Review:
- Render deployment configuration
- GitHub Pages setup
- Container orchestration
- Health monitoring
- Backup and recovery procedures

## Step 4: Workshop-Safe Implementation Planning
Plan implementation that won't disrupt workshop functionality.

### Risk Assessment
Evaluate risks to:
- **Live Demo Capability**: Can workshops continue during implementation?
- **Container Stability**: Will changes affect running containers?
- **Student Access**: Will students lose access to their work?
- **Deployment Pipeline**: Will automated deployments continue working?
- **Backup Systems**: Are fallback options available?

### Implementation Strategy
Choose appropriate approach:

**Low-Risk Changes** (Safe during workshops):
- Documentation updates
- Non-critical UI improvements
- Backend optimizations that don't affect APIs
- Test additions or improvements

**Medium-Risk Changes** (Require testing):
- UI changes that affect workshop flow
- API modifications with backward compatibility
- Container configuration updates
- Deployment script improvements

**High-Risk Changes** (Require workshop downtime):
- Breaking API changes
- Major container infrastructure changes
- Database schema modifications
- Critical deployment pipeline changes

### Workshop-Safe Development
Plan implementation to:
- Maintain backward compatibility
- Use feature flags for new functionality
- Test in isolated environments first
- Have rollback procedures ready
- Minimize impact on running containers

## Step 5: Testing Strategy for Workshop Environment
Develop comprehensive testing approach for workshop-specific functionality.

### Container Testing
```xml
<read_file>
<path>workshop-deployment-package/test-infrastructure.sh</path>
</read_file>
```

Test:
- Container startup and health
- VS Code accessibility and functionality
- Cline AI integration and responses
- Demo project loading and execution
- Deployment pipeline from container to GitHub Pages

### Demo Flow Testing
Validate:
- Each demo scenario works as expected
- Student interaction points function correctly
- Live coding demonstrations flow smoothly
- Error handling and recovery procedures
- Performance under workshop load

### Student Experience Testing
Verify:
- InfoSession page functionality
- File upload and processing
- Password protection systems
- StudentShowcase page rendering
- Cross-browser compatibility

## Step 6: Deployment Considerations
Plan deployment that maintains workshop availability.

### Deployment Timing
Consider:
- **Workshop Schedule**: Are workshops scheduled soon?
- **Student Deadlines**: Do students have pending submissions?
- **Demo Requirements**: Are live demos planned?
- **Container Uptime**: How long can containers be down?

### Deployment Strategy
Choose appropriate method:

**Rolling Deployment** (Preferred):
- Deploy to backup containers first
- Test thoroughly in production environment
- Switch traffic gradually
- Keep original containers as fallback

**Blue-Green Deployment**:
- Deploy to parallel environment
- Test complete workshop flow
- Switch DNS/routing when validated
- Keep previous environment for quick rollback

**Maintenance Window**:
- Schedule downtime during low-usage periods
- Notify stakeholders of planned maintenance
- Have rollback plan ready
- Monitor closely during deployment

## Step 7: Workshop Validation
Perform workshop-specific validation after implementation.

### End-to-End Workshop Test
```xml
<ask_followup_question>
<question>Ready to perform end-to-end workshop validation. This will test:

1. Container accessibility and VS Code functionality
2. Demo scenario execution (Legacy → React → Feature Development)
3. Student submission and showcase systems
4. Deployment pipeline from development to live site

Should I proceed with full workshop validation testing?</question>
<options>["Yes, run full workshop validation", "Test specific components only", "Skip validation (low-risk change)", "Schedule validation for later"]</options>
</ask_followup_question>
```

### Validation Checklist
- [ ] All 5 demo containers accessible and functional
- [ ] VS Code loads properly with Cline extension
- [ ] Demo scenarios execute without errors
- [ ] Student submission system works end-to-end
- [ ] GitHub Pages deployment pipeline functional
- [ ] Performance meets workshop requirements
- [ ] Error handling and recovery procedures work
- [ ] Documentation updated for any changes

## Step 8: Workshop Documentation Update
Update workshop-specific documentation as needed.

### Documentation Areas
Update relevant sections:
- Workshop presenter guide
- Student instruction materials
- Container setup and deployment procedures
- Troubleshooting and recovery procedures
- Demo scenario scripts and timing

### Stakeholder Communication
Notify relevant parties:
- Workshop presenters of any changes
- Students if submission process affected
- Technical team of infrastructure changes
- Management of any schedule impacts

## Integration Notes
This workflow integrates with:
- `/analyze-issue.md` for detailed technical analysis
- `/implement-clean.md` for code quality assurance
- `/fix-lifecycle.md` for complete resolution process
- Workshop deployment and monitoring systems

## Workshop-Specific Quality Gates
Ensure:
- **Demo Continuity**: Workshop demonstrations remain functional
- **Student Access**: No disruption to student work or submissions
- **Performance**: Response times meet workshop requirements
- **Reliability**: High availability during scheduled workshops
- **Recovery**: Quick rollback capability if issues arise

## Success Criteria
Workshop deployment is successful when:
- All demo scenarios execute flawlessly
- Student submission and showcase systems work perfectly
- Container infrastructure is stable and performant
- Deployment pipeline is reliable and automated
- Documentation is current and accurate
- Stakeholders are informed and prepared

This workflow ensures that workshop-related changes maintain the high-quality, reliable experience required for successful educational demonstrations.
