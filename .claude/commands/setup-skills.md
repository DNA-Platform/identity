---
name: setup-skills
description: Install recommended skills for this project using the skills.sh CLI. Installs humanizer, Context7, and discovers additional relevant skills.
---

Skills required to be installed in all projects that involve code:
- **upstash/context7-mcp** - Fetch latest docs of libraries

Skills we like:

| Skill | Owner/Repo | Description |
|---|---|---|
| `vercel-react-best-practices` | `vercel-labs/agent-skills` | React and Next.js performance optimization guidelines from Vercel Engineering |
| `web-design-guidelines` | `vercel-labs/agent-skills` | Review UI code for Web Interface Guidelines compliance (accessibility, UX best practices) |
| `vercel-composition-patterns` | `vercel-labs/agent-skills` | React composition patterns that scale (compound components, render props, context) |
| `api-security-best-practices` | `sickn33/antigravity-awesome-skills` | Secure API design — auth, authorization, input validation, rate limiting |
| `architecture-patterns` | `wshobson/agents` | Backend architecture patterns: Clean Architecture, Hexagonal, Domain-Driven Design |
| `content-strategy` | `coreyhaines31/marketingskills` | Plan content strategy, topic clusters, blog strategy, and content ideas |
| `seo-audit` | `coreyhaines31/marketingskills` | Audit and diagnose technical SEO issues on your site |
| `analytics-tracking` | `coreyhaines31/marketingskills` | Set up and audit GA4, GTM, event tracking, and UTM parameters |
| `frontend-design` | `pbakaus/impeccable` | Create distinctive, production-grade frontend interfaces with high design quality |
| `mermaid-diagrams` | `softaworks/agent-toolkit` | Create software diagrams (class, sequence, flowcharts, ERD, C4, etc.) using Mermaid |
| `humanizer` | `blader/humanizer` | Remove AI-generated writing patterns to make text sound more natural |
| `e2e-testing-patterns` | `wshobson/agents` | E2E testing with Playwright and Cypress — reliable test suites, flaky test fixes |

Use `npx skills add {repo} --skill {skill} -a claude-code -y` to install.

1. **Discover additional skills** relevant to this project's overall requirements and tech stack:
   - Visit https://skills.sh or https://skillsmp.com to find skills matching the project's technologies.
   - Check https://github.com/anthropics/skills for official Anthropic skills.
   - Check https://github.com/VoltAgent/awesome-agent-skills for community skills.

2. **Install project-relevant skills** using:
   ```bash
   npx skills add <owner>/<repo> --skill <skill-name> -a claude-code -y
   ```

3. **Verify Context7 MCP** is configured in `.claude/mcp.json`.

4. Report what was installed and any skills that might be useful but need human approval.

$ARGUMENTS may specify additional skills to install.
