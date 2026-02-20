---
name: setup-skills
description: Install recommended skills for this project using the skills.sh CLI. Installs humanizer, Context7, and discovers additional relevant skills.
---

Skills required to be installed in all projects that involve code:
- **upstash/context7-mcp** - Fetch latest docs of libraries

Skills we like:
- **wshobson/agents/architecture-patterns** - architectural software patterns
- **pbakaus/impeccable** - advanced ux
- **blader/humanizer** - writing quality
- **vercel-labs/agent-skills/web-design-guidelines** - best practices for react development
- **vercel-labs/agent-skills/vercel-react-best-practices** - best practices for react development
- **sickn33/antigravity-awesome-skills/api-security-best-practices** - api security
- **coreyhaines31/marketingskills/seo-audit** - SEO best practices
- **coreyhaines31/marketingskills/copywriting** - Marketing copywriting

Use `npx skills add {skill} -a claude-code -y` to install.

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
