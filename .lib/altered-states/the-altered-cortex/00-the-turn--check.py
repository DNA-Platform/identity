#!/usr/bin/env python3
"""00-the-turn--check.py — the executable form of `00-the-turn.md` (the resource beside its chapter).

Bookkeeping, On Specifications: "A specification without a validator is a convention. A specification with a
validator is a contract." This is that validator. It is the chapter in Python; the chapter is this file in prose.

ERRORS ONLY — no warning tier. Bookkeeping's reason, adopted verbatim: a warning is a rule you check and then
tell the reader to ignore, and no one returns to a deferred warning; it accumulates as drift until the book
quietly stops meaning what it says.

WHAT IT CHECKS (each one is a way this book has actually lied before):
  1. LINKS   — every markdown link in every chapter resolves. The reading list IS the link graph; if a target
               moved, the recursive read silently truncates and you never notice.
  2. GRAPH   — the reading list reaches the three contracts and EVERY chapter (the orphan check). It has twice
               named two contracts when there were three, and it went stale about ch5 while every link resolved.
  3. STATE   — deliverable.md's Status points at results/_progress.txt instead of copying a count that is false
               within minutes.
  4. STUDIES — the ✓/✗ list in ch5 matches the measured staleness. The book said "two" when it was 13 of 15.
  5. RUN     — the generation watchdog is alive and detached (PPID 1), so it survives a session restart.
  6. FIGURES — every figure a contract or chapter cites as evidence actually exists. comparison.md cited ELEVEN
               figures, and all eleven were gone: the findings were computed on the retired cortex-readout MEIs,
               the data was deleted in the free-mu revert, and the prose kept asserting the numbers. A finding
               whose evidence has evaporated still reads as a finding — that is the most dangerous drift there
               is, because it is indistinguishable from knowledge.

    python 00-the-turn--check.py            # errors only; exit 1 if any
    python 00-the-turn--check.py --verbose  # also print what passed
"""
import re
import sys
import json
import subprocess
from pathlib import Path
from collections import defaultdict

# Windows consoles default to cp1252, and this validator's own messages carry ✗/µ/— (the STUDIES and readout
# checks). A validator that crashes while PRINTING its verdict is worse than none — it hid a real STUDIES
# failure behind a UnicodeEncodeError until this was added. Make our output encoding-safe first.
for _stream in (sys.stdout, sys.stderr):
    try:
        _stream.reconfigure(encoding="utf-8", errors="replace")
    except (AttributeError, ValueError):
        pass

BOOK = Path(__file__).resolve().parent                 # library/.lib/the-altered-cortex/
REPO = BOOK.parents[2]                                 # altered-states/
ANA = REPO / "src" / "analyses" / "most-exciting-image"
RESULTS = ANA / "results"
STUDIES = ANA / "pipeline" / "studies"

ERRORS: list[str] = []
PASSED: list[str] = []


def err(what: str, detail: str) -> None:
    ERRORS.append(f"{what}: {detail}")


def ok(what: str) -> None:
    PASSED.append(what)


# --- 1. LINKS: every markdown link in the book resolves -------------------------------------------
_LINK = re.compile(r"\[([^\]]+)\]\(([^)#]+)(#[^)]*)?\)")


def check_links() -> None:
    broken = 0
    for md in sorted(BOOK.glob("*.md")):
        for text, target, _anchor in _LINK.findall(md.read_text(encoding="utf-8", errors="replace")):
            if target.startswith(("http://", "https://", "mailto:")):
                continue
            if not (md.parent / target).resolve().exists():
                err("LINK", f"{md.name}: [{text}]({target}) -> does not exist")
                broken += 1
    if not broken:
        ok("LINK: every markdown link in the book resolves")


# --- 2. GRAPH: the reading list reaches the contracts + the map ------------------------------------
def check_graph() -> None:
    """The reading list must REACH everything — not merely contain links that resolve.

    This check was born with a hole, and the hole is the point. It first verified only that the list named the
    contracts and the map, and that every link resolved. Both passed while ch0 was silently WRONG: ch5 had been
    added, the ✓/✗ list and audit trail had moved into it, and the reading list — the one thing read every turn —
    still sent the reader to the map for them and never mentioned ch5 at all. Resolving links proved nothing,
    because the stale sentences pointed at files that existed. **A reading list is only honest if it reaches
    every chapter**, so an unreachable chapter is now an error: it is a room with no door.
    """
    turn = BOOK / "00-the-turn.md"
    if not turn.exists():
        return err("GRAPH", "00-the-turn.md is missing — the reading list has no home")
    body = turn.read_text(encoding="utf-8", errors="replace")

    required = {
        "specification.md": "the analysis contract",
        "deliverable.md": "the handoff contract",
        "comparison.md": "the third contract (the list has twice named two when there were three)",
    }
    missing = [f"{f} ({why})" for f, why in required.items() if f not in body]
    if missing:
        err("GRAPH", "the reading list does not name: " + "; ".join(missing))
    else:
        ok("GRAPH: the reading list names all three contracts")

    # ORPHAN CHECK: every chapter of this book must be reachable from the reading list.
    linked = {t for _txt, t, _a in _LINK.findall(body)}
    orphans = [c.name for c in sorted(BOOK.glob("[0-9][0-9]-*.md")) if c.name not in linked
               and c.name != "00-the-turn.md"]
    if orphans:
        err("GRAPH", f"the reading list does not reach: {', '.join(orphans)} — a chapter with no door. "
                     f"Every chapter is named in ch0 or it is invisible.")
    else:
        ok("GRAPH: the reading list reaches every chapter (no orphans)")

    # The cover must reach every chapter too — a chapter without a TOC entry is invisible (On Covers).
    cover = (BOOK / ".cover.md").read_text(encoding="utf-8", errors="replace")
    cov_linked = {t for _txt, t, _a in _LINK.findall(cover)}
    cov_orphans = [c.name for c in sorted(BOOK.glob("[0-9][0-9]-*.md")) if c.name not in cov_linked]
    if cov_orphans:
        err("GRAPH", f"the cover's TOC does not list: {', '.join(cov_orphans)} — invisible to a reader "
                     f"navigating by covers and links, which is the only sanctioned way to navigate.")
    else:
        ok("GRAPH: the cover's TOC lists every chapter")


# --- 3. STATE: deliverable.md's Status vs what is on disk ------------------------------------------
def measure_disk() -> dict:
    """The ground truth: matched MEI cells (complete in ALL FOUR twins) and metamer count."""
    mei_dir, met_dir = RESULTS / "_full" / "mei", RESULTS / "_full" / "metamer"
    cells: dict[str, set] = defaultdict(set)
    if mei_dir.is_dir():
        for f in mei_dir.glob("mei_*_cell*.npy"):
            m = re.match(r"mei_(pre|post)_(A|B)_cell(\d+)\.npy$", f.name)
            if m:
                cells[m.group(3)].add(f"{m.group(1)}_{m.group(2)}")
    metamers = len(list(met_dir.glob("*.npy"))) if met_dir.is_dir() else 0
    return {"matched": sum(1 for s in cells.values() if len(s) == 4), "metamers": metamers}


def check_state() -> None:
    """The counts have ONE home (results/_progress.txt). The contract must POINT at it, never copy it.

    This check was born wrong and is worth remembering: it first compared a hardcoded count in deliverable.md
    against disk. It passed at 15:23 and failed at 15:34 — the run writes every ~30s, so the contract could not
    stay true for the length of one turn. A number copied into prose is a second source that drifts from the
    first: exactly the rot this project already paid for with two rival centre functions. So the rule inverted —
    a hardcoded count is now itself the error, and the pointer is what is enforced.
    """
    deliv = ANA / "deliverable.md"
    if not deliv.exists():
        return err("STATE", "deliverable.md is missing — the handoff contract")
    body = deliv.read_text(encoding="utf-8", errors="replace")
    status = body.split("## Status", 1)[-1] if "## Status" in body else body

    if "_progress.txt" not in status:
        err("STATE", "deliverable.md Status does not point at results/_progress.txt — the ONE home for the "
                     "live counts. Point at it; do not copy numbers into the contract.")
    else:
        ok("STATE: the Status block points at results/_progress.txt instead of copying counts")

    # A copied count is the error, not a mismatched one. (Prose like "N/149" or "N/800" in the Status block.)
    copied = re.findall(r"\b(\d+)\s*/\s*(?:149|800)\b", status)
    if copied:
        err("STATE", f"deliverable.md Status hardcodes a live count ({', '.join(copied)}) — it is stale within "
                     f"minutes. Describe the structure; point at results/_progress.txt for the number.")
    else:
        ok("STATE: the Status block hardcodes no live count")

    # results/_organized/ is the gate for everything downstream; the book must not imply it exists.
    if (RESULTS / "_organized").is_dir():
        ok("STATE: results/_organized/ exists")
    elif "_organized" not in status or "does not exist" not in status:
        err("STATE", "results/_organized/ does not exist but deliverable.md Status does not say so")
    else:
        ok("STATE: results/_organized/ absent, and the book says so")

    prog = RESULTS / "_progress.txt"
    disk = measure_disk()
    if not prog.exists():
        err("STATE", "results/_progress.txt is missing — the live counts have no home to point at")
    else:
        # The progress file is the source; if it disagrees with disk, the SOURCE is what to fix.
        head = prog.read_text(encoding="utf-8", errors="replace")
        m = re.search(r"ALL FOUR twins\):\s*(\d+)/", head)
        if m and abs(int(m.group(1)) - disk["matched"]) > 12:      # <=12 workers may each hold a part-done cell
            err("STATE", f"results/_progress.txt says {m.group(1)} matched; disk says {disk['matched']} "
                         f"(gap > the 12 in-flight workers can explain — the run may be dead)")
        else:
            ok(f"STATE: _progress.txt agrees with disk (disk: {disk['matched']} matched, "
               f"{disk['metamers']} metamers)")


# --- 4. STUDIES: the map's stale-count vs the measured one -----------------------------------------
def _strip_comments(src: str) -> str:
    """Drop `#` comments before matching. A check that reads a comment as code is not a check.

    This bit me on the first fix: `_blur_check.py` was repaired AND had a comment explaining the old broken
    idiom — `# (parents[1]/"results") resolved to pipeline/results/` — and the regex matched the COMMENT, so the
    file was reported stale for documenting the very bug it had fixed. A file that explains a mistake would have
    been permanently marked as making it. Same class as the μy-R² gate: the measurement could not tell what it
    was looking at. (Naive split is safe here — these are path expressions, not strings containing '#'.)
    """
    return "\n".join(line.split("#", 1)[0] for line in src.splitlines())


def measure_studies() -> tuple[list[str], list[str]]:
    """A study is STALE if it resolves results/ or sys.path with the pre-move parents[] indices.
    Correct (post-move) idiom: sys.path <- parents[1] (pipeline) + parents[4] (src); results <- parents[2]."""
    fresh, stale = [], []
    for f in sorted(STUDIES.glob("_*.py")):
        src = _strip_comments(f.read_text(encoding="utf-8", errors="replace"))
        res = set(re.findall(r"parents\[(\d)\]\s*/\s*[\"']results[\"']", src))
        sp = {(m[1] or "parent") for m in
              re.findall(r"sys\.path\.insert\(0,\s*str\(_?HERE\.(parent|parents\[(\d)\])\)", src)}
        good = (res <= {"2"}) and ("1" in sp or not sp)
        (fresh if good else stale).append(f.name)
    return fresh, stale


def check_studies() -> None:
    if not STUDIES.is_dir():
        return err("STUDIES", f"{STUDIES} does not exist")
    fresh, stale = measure_studies()
    # The ✓/✗ status is VOLATILE, so it lives in ch5 (the working state), never in the timeless map.
    state = (BOOK / "05-the-working-state.md").read_text(encoding="utf-8", errors="replace")
    m = re.search(r"\*\*(\d+) of (\d+) are\s*\n?✗\*\*|(\d+) of (\d+) are ✗", state)
    got = tuple(int(g) for g in (m.groups() if m else ()) if g) if m else ()
    if not got:
        err("STUDIES", "ch5 does not state 'N of M are ✗' — the measured staleness")
    elif got != (len(stale), len(fresh) + len(stale)):
        err("STUDIES", f"ch5 says {got[0]} of {got[1]} stale; measured {len(stale)} of {len(fresh) + len(stale)}")
    else:
        ok(f"STUDIES: ch5's stale count is correct ({len(stale)} of {len(fresh) + len(stale)})")
    for name in fresh:
        if f"✓ `{name}`" not in state:
            err("STUDIES", f"{name} runs, but ch5 does not mark it ✓")
    for name in stale:
        if f"✗ `{name}`" not in state:
            err("STUDIES", f"{name} is stale, but ch5 does not mark it ✗")

    # The map must stay timeless: no ✓/✗ status, no counts. (Libby, on On Synopsis §Write for evolution.)
    plan = (BOOK / "03-the-analysis-plan.md").read_text(encoding="utf-8", errors="replace")
    if "✗" in plan or "✓" in plan:
        err("STUDIES", "the map (ch3) carries ✓/✗ status — that is volatile and belongs in ch5. The map names "
                       "what owns what, by concept; it must stay true as the project grows.")
    else:
        ok("STUDIES: the map carries no volatile status (stays timeless)")


# --- 5. RUN: the generation watchdog is alive AND detached -----------------------------------------
def check_run() -> None:
    """It must survive a session restart, which means the watchdog's parent is init (PPID 1), not our shell."""
    try:
        # encoding/errors explicit: ps output carries other processes' command lines, which contain non-cp1252
        # bytes (an em-dash in a teammate's dispatch crashed this check once). Never let the locale decide.
        ps = subprocess.run(["ps", "-ef"], capture_output=True, timeout=20).stdout.decode("utf-8", "replace")
    except Exception as e:
        return err("RUN", f"could not run ps ({type(e).__name__}) — cannot verify the run is alive")
    watchdogs = [l for l in ps.splitlines() if ("rebuild_freemu.sh" in l or "resume_gen.sh" in l)
                 and "grep" not in l]
    if not watchdogs:
        return err("RUN", "no generation watchdog alive. Relaunch DETACHED from "
                          "src/analyses/most-exciting-image/pipeline/:\n"
                          "         nohup bash rebuild_freemu.sh >/dev/null 2>&1 & disown")
    if len(watchdogs) > 1:
        err("RUN", f"{len(watchdogs)} watchdogs alive — competing worker pools will thrash the CPU. "
                   "Kill all but one.")
    # DETACHED means the ANCESTRY reaches init — not that this pid's own ppid is 1. `nohup ... & disown` leaves
    # a chain (detached shell -> the .sh -> python), so testing the leaf's ppid convicts a healthy run: it read
    # "ppid=12, not 1" and told me to kill and relaunch a chain that was already anchored. Walk it instead.
    ppid = {}
    for line in ps.splitlines()[1:]:
        c = line.split()
        if len(c) > 2 and c[1].isdigit() and c[2].isdigit():
            ppid[int(c[1])] = int(c[2])

    def reaches_init(pid, hops=12):
        while hops and pid in ppid:
            pid = ppid[pid]
            if pid <= 1:
                return True
            hops -= 1
        return pid <= 1

    for line in watchdogs:
        cols = line.split()
        if len(cols) > 2 and cols[1].isdigit() and not reaches_init(int(cols[1])):
            err("RUN", f"watchdog pid {cols[1]} is parented to a live shell, not init — it will die with this "
                       f"session. Relaunch with: nohup bash rebuild_freemu.sh >/dev/null 2>&1 & disown")
    if not any(e.startswith("RUN") for e in ERRORS):
        ok(f"RUN: {len(watchdogs)} watchdog alive and detached (survives a session restart)")

    prog = RESULTS / "_progress.txt"
    if prog.exists():
        ok("RUN: " + prog.read_text(encoding="utf-8", errors="replace").splitlines()[0].strip())


# --- 6. FIGURES: every figure cited as evidence exists ---------------------------------------------
_FIG = re.compile(r"`(results/[A-Za-z0-9_./-]+\.(?:png|json|npy|csv|h5))`")


def check_figures() -> None:
    """A finding whose figure is gone is not a finding — but it still reads like one.

    comparison.md's F1-F8 cite eleven figures. Every one had been deleted: the findings were computed on the
    cortex-readout MEIs, that readout was reverted to free-mu, `_full_cold_collapsed/` and `_full_cortex_stale/`
    were deleted with it, and the prose went on stating ΔH to two decimals. Nothing in the book noticed, because
    a backticked path is not a markdown link — the LINK check never looked at it. Evidence that has evaporated
    is the most dangerous drift there is: it is indistinguishable from knowledge.
    """
    sources = list(BOOK.glob("*.md")) + [ANA / "comparison.md", ANA / "deliverable.md", ANA / "specification.md"]
    missing: dict[str, list[str]] = defaultdict(list)
    total = 0
    for src in sources:
        if not src.exists():
            continue
        for fig in set(_FIG.findall(src.read_text(encoding="utf-8", errors="replace"))):
            total += 1
            if not (ANA / fig).exists():
                missing[src.name].append(fig)
    if not missing:
        return ok(f"FIGURES: every cited figure exists ({total} citations)")
    for name, figs in sorted(missing.items()):
        err("FIGURES", f"{name} cites {len(figs)} figure(s) that do not exist — a finding whose evidence is gone: "
                       + ", ".join(sorted(figs)[:4]) + (" …" if len(figs) > 4 else ""))


# --- 7. CONVENTIONS: the layout + naming rules the project keeps re-breaking ------------------------
# Forbidden spellings of the two conditions. results/_data/ had accumulated SIX ways to say two things —
# _canonical, _nobh, _behaviour, _bh, -bh, _A/_B — so nothing could be found and nothing could be compared.
# The rule (Doug): NO SUFFIX = no-behaviour = the DEFAULT; `-bh` = behaviour. Nothing else, ever.
_BAD_NAME = re.compile(r"(canonical|_nobh|_behaviour|armA|armB|arm_[AB]|_clean)", re.I)


def check_conventions() -> None:
    """Layout and naming. Each clause is a rule that was broken and cost real time.

    - examples/ is FIGURES ONLY. `_organize.py` said so in a comment; `_prepost_analysis.py` wrote .npy there
      anyway, because a comment in another file is not a check.
    - Arrays live in results/_data/.
    - The condition suffix is '' (default, no behaviour) or '-bh'. Never a sixth spelling.
    """
    ex = RESULTS / "examples"
    if ex.is_dir():
        arrays = [p.name for p in ex.iterdir() if p.suffix in (".npy", ".npz")]
        if arrays:
            err("CONVENTIONS", f"results/examples/ holds {len(arrays)} array(s) — it is FIGURES ONLY; arrays "
                               f"belong in results/_data/: {', '.join(sorted(arrays)[:4])}")
        else:
            ok("CONVENTIONS: results/examples/ holds figures only (no arrays)")

    bad = []
    for d in (RESULTS / "examples", RESULTS / "_data"):
        if d.is_dir():
            bad += [f"{d.name}/{p.name}" for p in d.iterdir() if _BAD_NAME.search(p.name)]
    if bad:
        err("CONVENTIONS", f"{len(bad)} output(s) use a forbidden condition spelling — the rule is '' (default, "
                           f"no behaviour) or '-bh': {', '.join(sorted(bad)[:4])}")
    else:
        ok("CONVENTIONS: every output uses '' (default) or '-bh' — no rival spellings")

    # bh and no-bh are always separate: a comparison figure must exist for BOTH conditions or neither.
    if ex.is_dir():
        figs = {p.stem for p in ex.glob("*.png")}
        for base in sorted({f[:-3] for f in figs if f.endswith("-bh")} | {f for f in figs if not f.endswith("-bh")}):
            if base.startswith("retinotopy_749"):
                continue                                  # per-twin figures, already named pre/post/pre-bh/post-bh
            if (base in figs) != (f"{base}-bh" in figs):
                err("CONVENTIONS", f"'{base}' exists for only one condition — bh and no-bh are always separate "
                                   f"AND always both produced (figures for all 4 twins; if compared, all 2).")


def main() -> int:
    for check in (check_links, check_graph, check_state, check_studies, check_run, check_figures,
                  check_conventions):
        try:
            check()
        except Exception as e:  # a check that crashes is an error, never a silent pass
            err(check.__name__.upper(), f"the check itself crashed: {type(e).__name__}: {e}")

    if "--verbose" in sys.argv:
        for p in PASSED:
            print(f"  ok   {p}")
    if ERRORS:
        print(f"\n{len(ERRORS)} ERROR(S) — the book does not match the code. Fix before anything else:\n")
        for e in ERRORS:
            print(f"  ERROR  {e}")
        return 1
    print(f"\nthe turn contract holds ({len(PASSED)} checks passed) — the book matches the code.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
