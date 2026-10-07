# The Reimer lab

- **author:** [Adam](../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)
- **coauthor:** [David](../../../.claude/library/..teamsmanship/..team/david/the-devops-journal/.cover.md)

---

[Part: [als-remote-lab](02-als-remote-lab.md)]

## The rulings

Doug, 2026-10-05, on getting situated in the Reimer lab at BCM:

> *"This will require /als-remote because I need to get setup in the Reimer lab ... we have to execute everything from the remote computer because that is where I can get access ... Ultimately, our goal is to be able to dispatch code onto their servers, to be able to pull and process data from the lab, and I want you to explore many avenues and help me figure out what is possible and how to achieve getting situated in the lab"*

The lab's grant, the same week: Jacob Reimer asked that Doug have *"access to all three: jrdb, compute, and gpu"*. Ming Hu created a database account on `jr-database.ad.bcm.edu` and compute logins on `jr-compute001`, `jr-compute003` and `jr-compute005`, and offered a Kubernetes config file for the GPU servers.

## Why the box

The box, `lipshutzlab-01`, sits on the BCM network: address 10.20.201.51, search domain `ad.bcm.edu`. That makes it the team's way in. Everything below was established by recorded probes on `run-20261005-1531-reimer-access`.

## The credential — `.env`, here only, like the sudo password

`.env` at the project root on this machine holds `REIMER_USER=doug` and `REIMER_PASSWORD=<the value>`. The same password opens the database and the compute servers. It is kept exactly as [Root](01-06-als-remote--root.md) keeps the sudo password: the same three walls, and never written into this chapter, the library, git, memory or the box's disk.

A probe that needs it names the key, and the tool does the rest:

```
ALS_SECRET=REIMER_PASSWORD bash $T probe <branch> <name> '<command>'
```

The value goes as the first line of stdin and is read into an *unexported* variable in the shell that runs the script. The script runs in that shell by `eval`, because a `bash -s` child would never see an unexported variable, and exporting it would put it in an environment that anyone on the shared account can list. The probe receives it on its own stdin and reads it with `IFS= read -r PASSWORD`. So the recorded `.sh` holds that line and never the value, and a probe never prints it.

## What is reachable, and how

| resource | reached | what is there |
|---|---|---|
| **jr-database** (MySQL 5.7.33) | from the box, with DataJoint (already in the box's environment); **from this machine through the box**, by `tunnel up` (`127.0.0.1:13306` here), because Tailscale SSH forwards ports | `doug@%` reads `common_mice`, `common_lab` and every `pipeline_*` schema (61), and has all privileges on `doug_*`, our own schemas |
| **jr-compute001/003/005** | SSH from the box with the password (the box has no `sshpass`, so a probe drives the prompt through a pseudo-terminal); from here by `ssh -J lipshutzlab-01@lipshutzlab-01 doug@jr-compute001.ad.bcm.edu` | jr-compute001: 80 CPUs, 376 GB, no GPU; the lab's storage over CIFS (`/mnt/lab`, `jr-stor01`, the scratch volumes, the DataJoint stores `jrdj_stor01` and `dj-stor01`); `docker`, with doug in the docker group; `kubectl` |
| **GPU cluster** (Kubernetes v1.30.1) | `kube`: kubectl on this machine, the API server forwarded through the box | the namespace `doug`, ours alone ([The GPU cluster](#the-gpu-cluster)) |
| **The lab's code** | GitHub, publicly: [reimerlab](https://github.com/reimerlab) (28 repositories, among them `datajoint-djp-python`, `jedi3-paper`, `nnfabrik`, `scanreader`, `microns-nda-access`, `odor_meso`), and the pipeline, `cajal/pipeline` | private repositories need membership of the organisation |

Known hosts for the lab's machines live in `.tools/known_hosts_reimer` inside [the folder](01-02-als-remote--the-folder.md), never in the shared home's `~/.ssh`. Every `ssh` is run with `-F /dev/null`, so the shared account's own SSH configuration is never read.

## The route in: the box, or BCM's VPN

Every command in the tool jumps through the box, so **when the box is down, the lab is out of reach**.
That happened on 2026-10-06, around 23:00: Tailscale lists `lipshutzlab-01` as offline, and the box
tool's `check` fails at the tailnet ping. Nothing on this side can bring it back; someone at BCM has
to look at the machine. Doug messaged David.

The second route is BCM's own VPN, through **Doug's Sponsored Guest Account**. Its Enterprise Computing
Account is `u267393` (sign-in `u267393@bcm.edu`), sponsored by Veronica Monge at Jake's request. It
was activated, with password and MFA set, on 2026-10-07.
- **The gateway** is `vpn.bcm.edu`, a Cisco gateway ("BCM VPN Service") whose client is Cisco Secure
  Client (formerly AnyConnect). Its groups are 10NET (the default), 10NETVENDOR, BCM-Default, DLDCC,
  ERC, HNL and MEYER. BCM's orientation material: *"Only the ERC Option works for BCM resources."*
- **The ERC group refused the account** with AADSTS50105: the application "Cisco AnyConnect - PRD - ERC"
  admits only assigned users, and a new guest account is not assigned. BCM IT assigns it, usually at
  the sponsor's request (Help Desk it-support@bcm.edu, 713-798-8737). Whether ERC routes to the lab's
  10.x servers is not yet known; 10NET may be the group that does. Doug asked Ming and Cameron.
- **ProtonVPN** on this machine has a kill switch that blocked Tailscale before. Expect it to fight the
  BCM VPN too, and turn it off first.

**On the VPN the tool needs a direct mode**, not yet built. The key is already in doug's
`authorized_keys` on all three compute servers, the database answers on BCM's network, and the
cluster's config names the API server's own address (`10.28.0.136`, which its pinned certificate
names), so kubectl can connect without a tunnel. The change is to make the `-J` jump and the forwards
optional.

## The GPU cluster

Ming sent the config on 2026-10-05. It holds a client certificate and its private key for the user `doug`, so it is kept like the SSH key: `~/.kube/jr-k8s.yaml` on this machine only, outside the repo, and never on the box or in git, the library or memory. The API server, `10.28.0.136:6443`, is on BCM's network. So `kube` forwards it through the box to `127.0.0.1:16443` and runs kubectl here. That kubectl is v1.30.1, the server's version, installed in `~/.local/bin` and checked against its published SHA-256.

The config pins the API server's own certificate rather than a certificate authority. That certificate names `kubernetes`, `jr-kubemaster01` and `10.28.0.136`, so kubectl verifies the tunnelled server under the name `kubernetes`. The pinned certificate expires on 2027-07-24 and the client certificate on 2029-07-01. After the first date the config needs replacing from Ming.

**What our account can do** (`kube auth can-i --list`, 2026-10-05): create, read, change and delete pods, jobs, cron jobs, deployments, services and secrets in the namespace `doug`, and nothing outside it. It cannot list nodes, namespaces, quotas or limit ranges.

**What the cluster has, and how to ask for it** (Ming, 2026-10-06):

| GPU | memory | count |
|---|---|---|
| V100 | 32 GB | 3 |
| A40 | 48 GB | 1 |
| L4 | 24 GB | 1 |

Each GPU is on its own node. *"You can request as many as you need, the cluster will do the provision. If not available, your request will be pending till other GPU jobs finish and release GPUs."* There is no quota to plan around. A job asks for what it needs, as `nvidia.com/gpu` in its limits, and waits its turn. Node listing will be granted later, but requesting a GPU does not need it (*"you don't need that role to request GPU"*). Ming did not mention a taint, so whether a job needs a toleration will be seen on the first one: a pod that stays pending says why in `kube describe`.

**The lab's way to run a GPU job** is `cajal/pipeline`'s `K8/Jobs/minion-mcl-gpu.yaml`:
- a batch Job running a lab image, with `/mnt` mounted from the host;
- `nvidia.com/gpu: 1` as a limit, with requests of 4 CPUs and 30 Gi;
- a toleration for the `gpu=true:NoSchedule` taint, and a node pinned by hostname;
- the DataJoint credentials (`DJ_HOST`, `DJ_USER`, `DJ_PASS`) injected as environment variables from a Secret named `datajoint-credentials` in the job's namespace.

That manifest was written for another cluster (its node is `at-gpu1` and its image comes from `at-docker`). On this one a job requests a GPU without naming a node. A job has no stdin, so the lab's Secret departs from the rule that the password travels only on stdin. Whether our jobs use a Secret in `doug` is Doug's decision, to be made when the first job is built.

## How the lab works — by the book

Doug, 2026-10-05: *"I want us to be completely by the book. How do people usually do things like
this? ... Should we be doing this on the servers that Jake/Ming gave us? Is this a kind of workflow
they would do there?"* — and: *"we want to be doing things in the standard way for the lab, using the
standard code."* Read off jr-compute001 and the lab's code, on `run-20261005-1614-reimer-sources`:

- **The pipeline is a container.** `cajal/pipeline` ships as the image `ninai/pipeline`, and its
  `K8/` folder holds the Kubernetes manifests the lab runs it with. "Minion" CronJobs populate the
  tables (`minion.yaml`, `minion-gpu.yaml`), and there are Jupyter notebook pod deployments.
- **People work in containers on the compute servers, from the lab's registry**
  (`jr-saltmaster.ad.bcm.edu:5000`). On 2026-10-05, `erin-jr_notebook-1` was running from
  `ml-gpu-pipeline:cleaned` and had been up three weeks; `jrlab-stimulus-pipeline` and
  `dj-mcp-analysis-jrlab` containers ran beside it. About fifty people, Erin, Ming, Beth, Cameron and
  doug among them, have homes there.
- **What the lab's images hold.** `ml-gpu-pipeline:cleaned` has `datajoint 0.12.9`, `pipeline 0.2.0`,
  `stimulus`, `scanreader` and `torch 2.8`. `jrlab-stimulus-pipeline` adds `caiman 1.0`. The registry
  also has `caiman_pipeline:v1.9.6` and `stack-minion:v1`. **`nexport`, the lab's exporter, is in
  none of them.**
- **Tables a pipeline computes are filled by the lab's jobs** into `pipeline_*`. A person's own
  derived tables go in their own prefixed schema: doug's grant is `doug_%`, the arrangement Ming set
  up. Other people's schemas are invisible to us, so whether, for example, Erin has `erin_*` cannot be
  seen.

So by the book, the team's lab-side work runs in a personal container from the lab's image on a
compute server, as Erin's does. The box is the bridge between this machine and the lab, and the
team's own GPU. Doug, 2026-10-05: *"We are them. I am hired in the lab. What is stopping us from doing
things?"*, and *"I want to be as autonomous as possible without damaging anything ... I am okay taking
liberties by running things on docker containers etc. I am a part of the lab."*

**The lab's pattern** is `cajal/pipeline`'s `docker-compose.yml`: services `notebook` (Jupyter Lab),
`minion`, `minion-gpu` and `bash`, each mounting `/mnt` (the lab's storage) and reading DataJoint
credentials from a `.env` beside the compose file. Erin's `erin-jr_notebook-1` is project `erin-jr`,
service `notebook`. On the lab side, then, the credential's by-the-book home is a `.env` in doug's own
home on the compute server, readable only by him. That is his account, not a shared one.

**The key lives on this machine only.** `~/.ssh/reimer_ed25519` is here. Its public half is in
doug's `authorized_keys` on jr-compute001, 003 and 005; their homes are local disks, so each needed
its own copy. Every login goes from here, by key, through the box:
`ssh -i ~/.ssh/reimer_ed25519 -J lipshutzlab-01@lipshutzlab-01 doug@jr-compute00N.ad.bcm.edu`. The box
only forwards the connection and holds nothing, because its account is shared and a key stored there
would let anyone on it into doug's lab account.

**The lab's code imports.** At first, in a throwaway container from `ml-gpu-pipeline:cleaned` on
jr-compute001, the lab's code connected (`datajoint 0.12.9`) and then stopped at `from pipeline import meso`.
`meso` imports `injection`, which imports `commons.virus`, which declares `common_virus`. doug could not
read that schema, so DataJoint tried to create it and was refused
(`runs/run-20261005-1651-reimer-container/lab/`). Ming granted read on `common_*` the same evening, and
`from pipeline import meso, stack` now imports in the lab's image (`runs/lab/*-common-and-stacks.*`).
Populating `meso.StackCoordinates` still needs insert on `pipeline_meso`, and the grant allows only select.

## Our data, at the source

`pipeline_experiment.scan` holds both animals. `pipeline_meso` holds 33977's four delivered scans (12-1, 12-2, 17-1, 17-3) processed **two ways**:

| variant | segmentation | spike method | units, 12-2 |
|---|---|---|---|
| `1-19-7`, what was delivered | 19 `suite2p` | 7 `nmf_filt_raw` — "nonnegative sparse deconvolution from Vogelstein (2010) of low-pass filtered GCaMP traces" | 6,455 |
| `1-6-5`, 33328's processing | 6 `nmf-new` (CaImAn) | 5 `nmf` — "noise constrained deconvolution from Pnevmatikakis et al. (2016)" | 1,630 |

So the 33328-standard processing of 33977 already exists in the lab's database. Its traces fetch directly through DataJoint: `pipeline_meso.Activity.Trace`, float32, 11,400 frames for 12-2, sparse. It is Erin's data (Doug, 2026-10-05: *"It's all Erin's - it's her data"*). **Both animals are GCaMP6s** (`pipeline_experiment.session__fluorophore`, every session). The "GCaMP8m" in segmentation 19's description describes the method, not 33977's indicator, so the lab's CaImAn standard suits this mouse as it suited 33328.

**Where 33977's coordinates stand in the database** (`runs/lab/*-coordinates-33977.*`, 2026-10-05). All four scans are registered to stack 17-6 (`pipeline_stack.Registration`, method 5, every field). Segmentation and `ScanSet` exist for all four scans in both processings; segmentation 6 has 1,904, 1,630, 1,782 and 2,386 units on 12-1, 12-2, 17-1 and 17-3. `meso.StackCoordinates`, the populate that places each unit in the stack through that registration, exists only for **12-1 and 17-3, and only on segmentation 19**. So for 1-6-5 the populate is the one missing step. The delivered coordinates for 12-2 and 17-1 did not come from that table, so how they were made is a question for Erin.

## The exporter, reconstructed (2026-10-06)

Doug, 2026-10-06: *"you don't think you can infer the nexport from what you can find about 33328 and
see if you can figure it out?"* nexport is private, but its ancestor, the lab's public
[`cajal/neuro_data`](https://github.com/cajal/neuro_data), is not. The lab's release notebook
(`cajal/static_v1_data_release`) also carries nexport's `ImageNet` exporter class verbatim. The
delivered exports were the answer key, read straight from the original archives on the lab's storage.
Each stage is recorded in `runs/lab/*-nexport-stage-*.{py,out}`.

**33328, scan 6-2 (CaImAn, 1-6-5): reproduced exactly, every field, zero difference.** The method is
`neuro_data`'s, unchanged:
- **traces:** `meso.Activity.Trace` of the soma units, NaNs filled linearly, each unit timed by its
  `ms_delay`;
- **filter:** a hamming window of `2·⌊0.5/d⌋+1` frames (`d` the median frame period; 7 frames here),
  normalised to sum to one;
- **sampling:** a linear spline read at stimulus onset + 0.3 s;
- **trials:** the image trials (three flips, which `ExcludedTrial` encodes) in condition-hash order,
  minus those with a NaN in pupil or treadmill (64 here, all from the pupil);
- **behaviour:** `Eye` and `Treadmill` (hamming, `dhamming` for the derivative, |velocity|, through the
  behaviour clock);
- **metadata:** each column of `stimulus.Frame * Trial`, datetimes written as `repr`;
- **statistics:** `run_stats` over the train tier.

The release notebook's boxcar is not what nexport ran: it correlates 0.986 and matches nothing exactly.

**Tiers belong to the image**, assigned once by the lab (`ImageNetSplit`: the repeated images are
`test`, a random-order 10% of the rest `validation`). They cannot be recomputed, and need not be.
Every delivered export agrees on every image two exports share (33328 against 33977: 5,050 of 5,050),
so an export of a scan takes the tiers already assigned to its images.

**33977, scan 12-1 (Suite2P, 1-19-7), Erin's original archive: the bookkeeping matches, the responses
do not.** The procedure reproduces her 6,084 units and her 6,000 trials, both in her order. But her
responses equal none of what the pipeline stores, as far as tested on 200 units (median per-cell
correlation, and her values over ours):

| her responses against | correlation | ratio |
|---|---|---|
| hamming of `Activity.Trace`, spike method 7 (the only one) | 0.92 | 3.13 |
| boxcar of the same | 0.85 | 3.13 |
| hamming of `Fluorescence.Trace` | 0.76 | 0.60 |

So her Suite2P responses come from something other than the stored traces, or from a setting none of
these reproduce. That agrees with the earlier finding that 33977's delivered activity behaves like a
first-order kernel inversion. What it is, is Erin's to say.

**Erin confirmed the method, 2026-10-06.** The response filter, window, offset, delay, soma units, trial
order, behaviour drop and tiers *"match what I have on my end."* On neuropil: *"neuropil is implicitly
accounted for in CaImAn's CNMF factorization, so we shouldn't need to remove it for the CaImAn traces."*
That follows from the algorithm. CNMF models the movie as cell footprints plus a background term, and
neuropil is the background. 33328's export is exactly the stored spike-5 traces with nothing added,
so the pipeline adds no step either. **An exporter has no neuropil step of its own**: nexport carries
whatever `Activity.Trace` holds, and neuropil is decided upstream, by segmentation, extraction and
deconvolution.

**Open, with Erin: what her Suite2P responses were deconvolved by.** The lab describes spike method 7
(`nmf_filt_raw`) as *sparse* deconvolution, the only one stored for segmentation 19. Her exported
responses behave like a linear, non-sparse inversion and run three times larger. Two candidates, from
first principles and from her own code: Suite2P's own deconvolution (OASIS, an exponential kernel with
no sparsity penalty, after subtracting 0.7 × the neuropil trace), or her Wiener deconvolution
([`reimerlab/wiener_deconv`](https://github.com/reimerlab/wiener_deconv), Neyhart et al. 2024, *Cell
Reports*), which is linear by construction. Segmentation 19 and spike method 7 are the Reimer lab's
own additions (`cajal/pipeline` stops at spike method 6), so their code is the lab image's
`pipeline` package.

**Open:** `album` (`oracle`/`single`). Collection 1's oracle set is exactly the delivered oracle
images, but album membership alone does not reproduce the per-trial labels. Nothing in the pipelines
reads it. nexport's `area` and `layer` come from anatomy tables, and Erin's 33977 export carried
neither.

## What is open

Asked of the lab on 2026-10-05, with the answers as they came:
1. **Read access to `common_*`**, without which the lab's `pipeline` package cannot be imported.
   *Granted by Ming the same day; the package imports.*
2. **Insert on `pipeline_meso`**, or the lab's populate run for us: `meso.StackCoordinates` for 33977,
   segmentation 6, on all four scans, as was done for 33328. *Cameron asked which scans and which
   stacks. The answer is scans 12-1, 12-2, 17-1 and 17-3, all four registered to stack 17-6 (registration
   method 5). 33977's other stack, 5-7, is a 320–720 µm V1 stack. Erin collected them.* *Not needed
   after all: the lab's own `meso.StackCoordinates.make` (fifteen lines: the affine registration grid at
   the field's resolution, each unit's centroid mapped through it) runs in our container with its two
   inserts captured in memory. It reproduces all 20,233 stored rows of segmentation 19 on 12-1 and 17-3 to
   within 0.0005 µm, which is float rounding, and places all 7,702 segmentation-6 units of the four scans
   (`runs/lab/*-stack-coordinates-captured.*`, 2026-10-06). 33328's matching used the same table: its
   `unit_stack_coords.csv` carries `stack_x`, `stack_y` and `stack_z`, and `meso.StackCoordinates` holds 33328's scans
   6-2 and 7-1 on stack 6-3 and 8-2, 9-1 and 9-2 on stack 8-1, all on segmentation 6.*
3. **The exporter.** Where the code Erin uses for these exports lives (her matching script reads
   "nexport datasets"; `sinzlab/nexport` is private), and access to it. *Cameron: Erin has the copy of
   nexport she used. His own copy is modified for novel cases (an intentional lag on `frame_times`,
   crops of fluorescence frames) and is offered for reference. Erin's made the delivered exports, so
   hers is the one to run.* *How sure each claim is. **33977's exports were made with nexport, by Erin**:
   Cameron says so, her matching script calls them "nexport datasets", and her folder on the lab's
   storage, `/mnt/lab/users/erin/nexport`, holds them before and after neuropil subtraction (it holds
   the exports, not the code). **33328's exports are in nexport's format**, laid out file for file like
   33977's, but a format does not name the tool that wrote it. **Who made them is not established**:
   the originals are in `/mnt/jrdj_stor01/astroml/` (2026-01-05), beside an astrocyte project's exports
   named for the features Cameron says his copy adds (`astrolag[N]ms`, `masked`, `rgeco`). That is an
   inference, so it is asked rather than stated (`runs/lab/*-who-made-33328-exports.*`). Because the
   comparison is 33977 against 33977, the exporter to hold constant is Erin's, with her settings.*
4. **The Kubernetes config file** for the GPU servers. *Received 2026-10-05 ([The GPU cluster](#the-gpu-cluster)).*
5. **Etiquette for a personal container**: which compute server, what limits, and whether
   `ml-gpu-pipeline:cleaned` is the image to use. *Cameron: some people use Kubernetes, and some launch
   containers by hand on **jr-compute003**, which is off Kubernetes and kept for large-memory work. There
   is no known standard limit for notebooks. nexport's memory ran "absurdly large" for him because of
   the fluorescence frames, and ours should be less.*

Decided: lab-side work runs in a personal container from the lab's image on a compute server
(Doug, 2026-10-05). A container launched by hand goes on jr-compute003 (Cameron, 2026-10-05).

**Who is asked what.** Erin is responsible for the datasets. Doug, 2026-10-06: *"I don't want to
bother people too much about specific datasets. Erin is responsible for that."* So the lab's thread
carries access and infrastructure only (grants, the GPU cluster, etiquette). Anything about a dataset
goes to Erin, in one message, after the database has answered what it can. Erin re-did 33977's
segmentation and deconvolution in CaImAn to match 33328; that redo is the `1-6-5` processing in
`pipeline_meso`. She said she would send the redone data. The key is installed. The skill for the lab is `als-remote-lab`, which carries the
`tunnel` and jump commands and the lab's knowledge.
