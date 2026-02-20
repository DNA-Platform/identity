# Security Report: Phase N

> **Reviewer**: Security Reviewer
> **Date**: YYYY-MM-DD
> **Phase**: [phase name]
> **Scope**: [Design review | Code audit | Dependency audit | Full review]
> **Status**: [in-progress | complete]

## Summary

| Severity | Count | Resolved |
|----------|-------|---------|
| Critical | 0 | 0 |
| High | 0 | 0 |
| Medium | 0 | 0 |
| Low | 0 | 0 |

Overall: [PASS / PASS WITH FINDINGS / FAIL — brief one-liner]

---

## Findings

<!-- One section per finding. Remove this section if no findings. -->

### SEC-001: [Finding Title]

| Field | Value |
|-------|-------|
| **Severity** | [Critical \| High \| Medium \| Low] |
| **Location** | `path/to/file.ts:42` |
| **Category** | [Injection \| Auth bypass \| XSS \| Data exposure \| CSRF \| Secrets \| Dependencies \| Other] |
| **Assignee** | [backend-lead \| frontend-lead] |
| **Status** | [open \| in-progress \| resolved] |

**Description**: What the vulnerability is and why it's exploitable.

**Evidence**:
```
Paste relevant code snippet or request/response showing the issue
```

**Suggested Fix**:
```
Pseudocode or pattern showing the correct approach
```

---

## Dependency Audit

<!-- Output of npm audit / pip audit / etc. Summary only — link to full output if verbose. -->

No known vulnerabilities found. / N vulnerabilities found: X critical, Y high. See findings above.

---

## Threat Model Notes

<!-- For security-sensitive features (auth, payments, PII): lightweight threat model -->
<!-- Delete if not applicable -->

---

## Sign-off

- [ ] All Critical findings resolved
- [ ] All High findings resolved or accepted with documented rationale
- [ ] Dependency audit clean (or exceptions documented)
- [ ] Security Reviewer approves phase for release
