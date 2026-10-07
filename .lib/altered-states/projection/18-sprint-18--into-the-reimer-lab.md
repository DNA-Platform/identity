# Sprint 18 — Into the Reimer lab

- **author:** [Nancy](../../../.claude/library/..teamsmanship/..team/nancy/nancy-or-the-weight-of-evidence/.cover.md)
- **coauthor:** [Adam](../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md), [David](../../../.claude/library/..teamsmanship/..team/david/the-devops-journal/.cover.md), [Arthur](../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **status:** `active`, **paused 2026-10-07 and waiting on access.** The lab box is offline, and Doug's
  BCM VPN needs the ERC group assigned. Every lab step resumes from [Where things stand](#where-things-stand).

---

Doug was given accounts in the Reimer lab (database, compute servers, GPU cluster), and the sprint's
aim followed from that: work as a member of the lab, by the lab's methods and code. The test task is
the one Doug set Erin before she began her leave: put 33977 through **33328's processing (CaImAn,
`1-6-5`)** and see whether its MEIs come right. How the lab is reached is not restated here. It is the
[`/als-remote-lab`](../../../src/.lib/the-skillset/02-als-remote-lab.md) skill and its chapter
[The Reimer lab](../../../src/.lib/the-skillset/02-01-als-remote-lab--the-reimer-lab.md), which holds
every grant, answer and measured fact. This chapter is the arc, the rulings, and the resume list.

## What to read first

- [The Reimer lab](../../../src/.lib/the-skillset/02-01-als-remote-lab--the-reimer-lab.md): the chain,
  the grants, our data at the source, the GPU cluster, the exporter reconstructed, and who is asked what.
- [`export`'s cover](../../../src/pipelines/export/.cover.md): the pipeline this sprint started, what it
  has built, and the export phase still to build.
- [The Pipelines, ch 3–5](../../../src/.lib/the-pipelines/03-the-rules-every-pipeline-follows.md): the rules
  any new phase follows, and rule 5 of [the tree](../../../src/.lib/the-pipelines/05-the-tree-doug-walks.md#names-and-the-folders-that-give-them-context)
  (a figure is named for its analysis and condition).
- `cajal/neuro_data`: `neuro_data/utils/data.py` and `neuro_data/static_images/data_schemas.py`. These
  are the lab's own code that the exporter turned out to be. The reference implementation is the
  record `runs/lab/20261006-164640-nexport-stage-2.py`.

## The rulings, verbatim

- **The aim.** *"our goal is to be able to dispatch code onto their servers, to be able to pull and
  process data from the lab, and I want you to explore many avenues and help me figure out what is
  possible and how to achieve getting situated in the lab"* (2026-10-05).
- **The lab's way.** *"we want to be doing things in the standard way for the lab, using the standard
  code"*. And: *"We are them. I am hired in the lab. What is stopping us from doing things?"*
- **Autonomy.** *"I want to be as autonomous as possible without damaging anything. If we can imagine
  doing things on our own, and double and triple check that we are doing it right, then I am okay
  taking liberties by running things on docker containers etc. I am a part of the lab."*
- **GitHub holds everything.** *"I must insist that we use github to keep everything in sync, and that
  when doing long running work, we make branches and merge back into main so we have a record of the
  state of the system at the time. We prefer data in github if it fits."*
- **Skills that cannot be overwritten.** *"Maybe even some sort of branch local skillset? ... I don't
  want them overwritten."*
- **Waiting is not the method.** *"Those are all necessary? We really can't do anything yet? They keep
  giving me access and I can't do anything with it?"*
- **Infer it.** *"you don't think you can infer the nexport from what you can find about 33328 and see
  if you can figure it out?"* And, when I fitted correlations instead of reading the algorithm:
  *"Reason from first principes and research as well as checking."*
- **Who is asked.** *"I don't want to bother people too much about specific datasets. Erin is
  responsible for that."*
- **Fewer cells is fine.** *"For the MEI analysis, let's see what we get with the 393. Jake told me to
  not always think more is more with the digital twins."*
- **Decided by question** (2026-10-06): export **both** of 33977's processings by the same
  reconstructed procedure, so the processing is the only difference. The new datasets are named
  **`33977-caiman`** and **`33977-suite2p`**, and each is a **complete four-recording dataset**.

## What was built

- **Lab access, all of it recorded** ([The Reimer lab](../../../src/.lib/the-skillset/02-01-als-remote-lab--the-reimer-lab.md)):
  key logins to jr-compute001/003/005 by jump through the box; the database tunnelled here; `common_*`
  granted, so the lab's `pipeline` package imports; the GPU cluster through `kube` (namespace `doug`,
  kubectl v1.30.1, three V100s, one A40 and one L4, no quota). Every probe and container run is
  recorded in `runs/lab/` and committed.
- **A branch-local skillset** (`src/.lib/the-skillset/`), and a compiler that reads every skillset and
  refuses a name defined twice. `als-remote` moved there, and `als-remote-lab` is new.
- **The `export` pipeline** (`src/pipelines/export/`), with two phases built:
  - **coordinates:** the lab's own `meso.StackCoordinates.make`, inserts captured instead of written.
    It reproduces all 20,233 stored rows of 33977's Suite2P recordings and all 4,750 of 33328's, to
    within 0.0005 µm.
  - **match:** `matched.cells.build` on the soma units. The 33328 control gives back Erin's 749
    pairs, pair for pair. On 33977 under CaImAn: 980 tracked pre to post, **393** in all four
    recordings, against 3,256 and 1,177 under Suite2P.
- **nexport, reconstructed.** `cajal/neuro_data`'s procedure, unchanged, reproduces 33328's delivered
  export of scan 6-2 exactly, in every field. The filter is a hamming window read through a linear
  spline at onset + 0.3 s. Erin confirmed the settings. Tiers belong to the image and agree across
  every delivery.
- **Also this sprint, outside the lab:** the ensemble-recurrence matrix for the stimulus-driven
  recordings of both animals (a minute = 61 consecutive trials; halves test DOI against drift), and
  the naming rule above, after Doug's correction.

## What was learned

- **By the book means the lab's code checked against the lab's outputs.** It does not mean waiting for
  the person who ran it. Two of five asks to the lab dissolved within the hour.
- **An exporter has no neuropil step.** nexport carries whatever `Activity.Trace` holds; neuropil is
  decided upstream. CNMF's background term holds it in CaImAn, and Suite2P subtracts 0.7 × its
  neuropil trace before its own deconvolution. Read the algorithm before fitting numbers to it.
- **Erin's Suite2P responses are not the stored traces.** The bookkeeping matches hers exactly (units,
  trials, order), but her responses correlate 0.92 with the stored spike-method-7 traces and run 3.1
  times larger. The lab describes method 7 as sparse; hers behave like a linear inversion. That is
  consistent with Suite2P's own deconvolution or with her Wiener method (`reimerlab/wiener_deconv`).
- **The spontaneous drop under CaImAn is not the matcher's.** All four recordings image the same four
  fields. Above chance, both processings link a third to a half of the spontaneous cells. Suite2P's
  raw numbers look better because about half its same-session pairs are coincidental.

## Where things stand

**Blocked, on access** (2026-10-07). Both routes into BCM are shut:
- **The box** (`lipshutzlab-01`) has been off the tailnet since about 2026-10-06 23:00 (`tailscale
  status`: offline). Doug has messaged David.
- **BCM's VPN.** Doug's Sponsored Guest Account `u267393` is active, with password and MFA set. The
  ERC group at `vpn.bcm.edu` (a Cisco gateway) refuses it with AADSTS50105: the application needs the
  user assigned. Doug has messaged Ming and Cameron. A Help Desk email is drafted in the conversation:
  ask for ERC VPN access for `u267393`, giving the error's request and correlation ids.

**When a route opens, in order:**

1. **The route.** On the VPN, give the lab tool a direct mode, with no `-J` jump, a direct database,
   and kubectl to `10.28.0.136` with no tunnel. Test each service. If the box returns first, nothing
   changes.
2. **The tool's output and fetch.** `container` gains a writable folder in doug's home on
   jr-compute003 (`~/doug-out/<name>`, mounted as `/out`, run as uid/gid 1031, workdir `/out`; 66 GB
   free). A `fetch` streams it here as tar and checks a SHA-256 manifest the export writes.
3. **The export phase**, in `export`, built from the stage-2 record. It writes nexport's format with no
   images (as Erin's 33977 export), takes tiers by image id from the delivered exports, and writes
   statistics by `run_stats`. **It is accepted only if re-exporting 33328's 6-2 matches the delivered
   archive file for file.** Area and layer: check whether the lab's anatomy tables are readable, since
   nexport takes them from there.
4. **The spontaneous exports.** One `.npz` per field (`unit_ids`, `traces` float32, `timestamps`), as
   Erin's are, and the location CSVs from the coordinates artifact. First find which clock her
   timestamps are on: they start at 292.14 s, not Unix time.
5. **Dataset names across the pipelines.** A dataset becomes its config name, with the animal a fact
   inside it. That touches 118 places. Prove it by rebuilding `33328` and `33977` byte-identical.
6. **`33977-caiman` and `33977-suite2p`:** exports (eight recordings), then matched, twins, and MEIs on
   each four-way set (393 under CaImAn). Twins on the box, or on the cluster once Ming says where jobs
   can write and how they install our environment, and once Doug decides on the Secret (step 8).

**Open questions, and whose:**
- **Erin:** what deconvolved her Suite2P responses. The reply to her question is drafted: it was the
  export before neuropil subtraction, and Suite2P's own output or her Wiener deconvolution are the
  candidates.
- **Ming:** a lab folder that both jr-compute and the GPU nodes mount where we can write; whether
  jobs reach GitHub and PyPI, or need an image pushed to `jr-saltmaster`.
- **Doug:** the cluster's database password as a Kubernetes Secret in `doug`. That is the lab's way
  (`datajoint-credentials`), and the recommendation.
- **Ours, not blocking:** `album`. Collection 1's oracle set matches the delivered one, but membership
  alone does not reproduce the per-trial labels. Nothing reads it.

**Verified numbers** (each in `runs/lab/`):

| what | value |
|---|---|
| 33328 6-2 export reproduced | 5,936 trials × 1,654 units, every field, max difference 0 |
| trials dropped for behaviour (33328 6-2) | 64, all from the pupil |
| StackCoordinates reproduced | 20,233 and 4,750 rows, within 0.0005 µm |
| 33328's 749 pairs reproduced | 749 of 749 |
| 33977 under CaImAn, four-way | 393 (980 tracked pre to post) |
| Erin's 33977 Suite2P against the stored spike-7 traces | correlation 0.92, her values 3.1× |

**Wrong turns, so nobody retries them:**
- the release notebook's **boxcar** (0.986 correlation, 7% exact);
- treating each ask to the lab as a prerequisite;
- calling 33328's export "almost certainly Cameron's" from where its file sits;
- wall-clock minutes on the driven recordings (the stimulus pauses drew stripes);
- figures named for their interpretation;
- a background `cd && … &` whose pid file landed in the repo root;
- `sed` on Python containing `\n`.
