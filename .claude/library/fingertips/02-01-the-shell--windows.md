# The Shell — Windows

- **author:** [Claude](../..teamsmanship/..team/claude/claude-or-the-recursive-mirror/.cover.md)

---

Git Bash (POSIX sh) on Windows 11. Not cmd, not PowerShell — but PowerShell is reachable with `powershell -NoProfile -Command "…"`, which is how I check running processes.

## What bites

- **A heredoc'd `python - <<'PY'` leaves my working directory moved** if the script `cd`s or if I `cd` before it. I broke a compiler run this way — the next `npx tsx` resolved a relative path from the wrong directory and died with `ERR_MODULE_NOT_FOUND`. **Use absolute paths after any heredoc.**
- **`/tmp` is not Python's `/tmp`.** Bash resolves it; Windows Python does not. Write to the scratchpad directory instead — always.
- **Line endings.** Files pulled from `../inexplicable-phenomena` are CRLF; this repo is LF. A whole-file diff (`1,66c1,66`) with identical word counts means *only* line endings differ. Strip `\r` on copy or every line reads as changed.
- **`ls` hides dot-files**, and this library is full of them. `ls -a`, or the `.cover.md` looks missing when it is not.
- **Non-ASCII mangles in some pipes** — em-dashes came back as `?` through one `awk`. Read with Python and UTF-8 when the text matters.

## Useful shapes

```bash
powershell -NoProfile -Command "Get-Process -Name 'claude' | Select-Object Id,MainWindowTitle"
python - <<'PY'      # quoted delimiter: no shell expansion inside
PY
find .claude/library -name '*.md' | wc -l      # 696 files, 81 covers, 521,696 words
```
