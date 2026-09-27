# Back to pipelines, on a new machine

- **author:** [Arthur](../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **coauthor:** [Nancy](../../../.claude/library/..teamsmanship/..team/nancy/nancy-or-the-weight-of-evidence/.cover.md)

---

[Book: [The Pipelines](.cover.md)]

## Where the work was

Through the summer the analysis lived in `src/analyses/most-exciting-image/` on Doug's laptop: a
module core, studies run by hand, notebooks, and results written wherever the study put them. It
produced the June delivery to the Reimer lab, and it produced the failure that ends every such
arrangement - ten scripts doing one job, three reversals of one decision, and figures whose evidence
had been deleted still reading as findings ([The Altered Cortex, ch0](../the-altered-cortex/00-the-turn.md)
is the record of that and of the discipline written against it). Synthesis ran on a CPU, where one
1,000-step MEI took seconds to minutes and the whole population took a night
([The Build ch14](../the-build/14-why-synthesis-is-slow.md)).

## The turn to pipelines, Sprint 16

The second animal, 33977, made hand-running untenable. Doug, 2026-09-14: *"I want this to be a clean,
single point of entry pipeline that can be used to run build steps, and that pipeline is
self-contained so that other pipelines can depend on it."* And 2026-09-26: *"Write things to run as a
pipeline. Try your best to engineer it like that, so then we get the analysis figures."*

So each stage of the work became a package under `src/pipelines/` with one conductor, phases that run
in order, products filed by dataset, and nothing shared with the next package but the dataset's name
and the files it leaves. [Sprint 16](../projection/16-sprint-16--the-pipeline-and-the-second-animal.md)
is the record of building them. What they are now is [chapter 2](02-what-each-pipeline-does.md).

## The new machine, Sprint 17

The lab's Linux box, `lipshutzlab-01` - 24 cores and an RTX 5080 with 16 GB - replaced the laptop as
where the work runs, and the pipelines went with it. Doug: *"I actually think we need to just migrate to
the assumption that there will be a GPU. We can't have multiple worlds here... This research requires
it. So we are replacing."* The CPU twins stayed, loadable by name as legacy; everything new runs on the
card. How the box is reached and driven is The Lab Box's [working remotely](../the-lab-box/05-working-remotely.md)
and the [`/als-remote`](../../../.claude/library/our-skillset/34-als-remote.md) skill; the short form is
that the team writes and commits code on Doug's machine, the box pulls, and every run is a pipeline's
entry point on its own branch, committed there and harvested back.

## What the machine changed in what counts as done

**Speed became part of correctness.** A card that could make an MEI in a second made a slow run a
defect rather than a fact to report. Doug, 2026-09-27: *"performance is a critical and necessary
condition of correctness and not a nicety. We are migrating from CPU. If things are taking 20 minutes
at a time for a batch, unless it's HUGE, we obviously aren't using the new tech... It is your bug to
solve."* The rule is [chapter 3, rule 9](03-the-rules-every-pipeline-follows.md#9-performance-is-part-of-correctness)
and the skill's [whole machine](../../../.claude/library/our-skillset/34-07-als-remote--the-whole-machine.md).

**Resolution became affordable, and had to be adapted to.** The card made the 2x frame (72 x 128)
practical, and the first 2x twins were wrong in a way only an MEI showed: every MEI a square, because
the network's kernels, sized in pixels, saw half the visual angle. The twins were rebuilt with their
extents scaled and their frequency limits left as published ([chapter 3, rule 6](03-the-rules-every-pipeline-follows.md#6-published-code-adapted-to-our-resolution-and-no-further)).

**The pipelines became a chain.** Matched cells build the twins, the twins build the MEIs and the
metamers, and one command runs it: *"We don't compute twins for the MEI alone. It is part of the
pipeline of connected results."*

**What Doug walks became a design constraint.** The first day on the card filled his folders with our
checks and bytecode; [chapter 5](05-the-tree-doug-walks.md) is the rule that came of it.

---

[Book: [The Pipelines](.cover.md)] | [Next: [What each pipeline does](02-what-each-pipeline-does.md)]
