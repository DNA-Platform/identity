# The Reimer lab

- **author:** [Adam](../..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)
- **coauthor:** [David](../..teamsmanship/..team/david/the-devops-journal/.cover.md)

---

[Part: [als-remote](34-als-remote.md)]

## The rulings

Doug, 2026-10-05, on getting situated in the Reimer lab at BCM:

> *"This will require /als-remote because I need to get setup in the Reimer lab ... we have to execute everything from the remote computer because that is where I can get access ... Ultimately, our goal is to be able to dispatch code onto their servers, to be able to pull and process data from the lab, and I want you to explore many avenues and help me figure out what is possible and how to achieve getting situated in the lab"*

The lab's grant, the same week: Jacob Reimer asked that Doug have *"access to all three: jrdb, compute, and gpu"*. Ming Hu created a database account on `jr-database.ad.bcm.edu` and compute logins on `jr-compute001`, `jr-compute003` and `jr-compute005`, and offered a Kubernetes config file for the GPU servers.

## Why the box

The box, `lipshutzlab-01`, sits on the BCM network: address 10.20.201.51, search domain `ad.bcm.edu`. That makes it the team's way in. Everything below was established by recorded probes on `run-20261005-1531-reimer-access`.

## The credential — `.env`, here only, like the sudo password

`.env` at the project root on this machine holds `REIMER_USER=doug` and `REIMER_PASSWORD=<the value>`. The same password opens the database and the compute servers. It is kept exactly as [Root](34-06-als-remote--root.md) keeps the sudo password: the same three walls, and never written into this chapter, the library, git, memory or the box's disk.

A probe that needs it names the key, and the tool does the rest:

```
ALS_SECRET=REIMER_PASSWORD bash $T probe <branch> <name> '<command>'
```

The value goes as the first line of stdin and is read into an *unexported* variable in the shell that runs the script. The script runs in that shell by `eval`, because a `bash -s` child would never see an unexported variable, and exporting it would put it in an environment that anyone on the shared account can list. The probe receives it on its own stdin and reads it with `IFS= read -r PASSWORD`. So the recorded `.sh` holds that line and never the value, and a probe never prints it.

## What is reachable, and how

| resource | reached | what is there |
|---|---|---|
| **jr-database** (MySQL 5.7.33) | from the box, with DataJoint (already in the box's environment); **from this machine through the box**, by `ssh -L 3306:jr-database.ad.bcm.edu:3306 lipshutzlab-01@lipshutzlab-01 -N`, because Tailscale SSH forwards ports | `doug@%` reads `common_mice`, `common_lab` and every `pipeline_*` schema (61), and has all privileges on `doug_*`, our own schemas |
| **jr-compute001/003/005** | SSH from the box with the password (the box has no `sshpass`, so a probe drives the prompt through a pseudo-terminal); from here by `ssh -J lipshutzlab-01@lipshutzlab-01 doug@jr-compute001.ad.bcm.edu` | jr-compute001: 80 CPUs, 376 GB, no GPU; the lab's storage over CIFS (`/mnt/lab`, `jr-stor01`, the scratch volumes, the DataJoint stores `jrdj_stor01` and `dj-stor01`); `docker`, with doug in the docker group; `kubectl` |
| **GPU servers** | Kubernetes, from a compute server's `kubectl` | not yet: needs the config file Ming offered |
| **The lab's code** | GitHub, publicly: [reimerlab](https://github.com/reimerlab) (28 repositories, among them `datajoint-djp-python`, `jedi3-paper`, `nnfabrik`, `scanreader`, `microns-nda-access`, `odor_meso`), and the pipeline, `cajal/pipeline` | private repositories need membership of the organisation |

Known hosts for the lab's machines live in `.tools/known_hosts_reimer` inside [the folder](34-02-als-remote--the-folder.md), never in the shared home's `~/.ssh`. Every `ssh` is run with `-F /dev/null`, so the shared account's own SSH configuration is never read.

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

**What stops us is the grant, and only the grant.** In a throwaway container from
`ml-gpu-pipeline:cleaned` on jr-compute001, the lab's code connects (`datajoint 0.12.9`), then stops at
`from pipeline import meso`: `meso` imports `injection`, which imports `commons.virus`, which declares
`common_virus`. doug cannot read that schema, so DataJoint tries to create it and is refused
(`runs/run-20261005-1651-reimer-container/lab/`). The lab's own code needs read access to `common_*`
before it can be imported. Populating `meso.StackCoordinates` needs insert on `pipeline_meso`; the
grant allows only select.

## Our data, at the source

`pipeline_experiment.scan` holds both animals. `pipeline_meso` holds 33977's four delivered scans (12-1, 12-2, 17-1, 17-3) processed **two ways**:

| variant | segmentation | spike method | units, 12-2 |
|---|---|---|---|
| `1-19-7`, what was delivered | 19 `suite2p` | 7 `nmf_filt_raw` — "nonnegative sparse deconvolution from Vogelstein (2010) of low-pass filtered GCaMP traces" | 6,455 |
| `1-6-5`, 33328's processing | 6 `nmf-new` (CaImAn) | 5 `nmf` — "noise constrained deconvolution from Pnevmatikakis et al. (2016)" | 1,630 |

So the 33328-standard processing of 33977 already exists in the lab's database. Its traces fetch directly through DataJoint: `pipeline_meso.Activity.Trace`, float32, 11,400 frames for 12-2, sparse. It is Erin's data (Doug, 2026-10-05: *"It's all Erin's - it's her data"*). **Both animals are GCaMP6s** (`pipeline_experiment.session__fluorophore`, every session). The "GCaMP8m" in segmentation 19's description describes the method, not 33977's indicator, so the lab's CaImAn standard suits this mouse as it suited 33328.

## What is open

Asked of the lab, 2026-10-05:
1. **Read access to `common_*`**, without which the lab's `pipeline` package cannot be imported.
2. **Insert on `pipeline_meso`**, or the lab's populate run for us: `meso.StackCoordinates` for 33977,
   segmentation 6, on all four scans, as was done for 33328.
3. **The exporter.** Where the code Erin uses for these exports lives (her matching script reads
   "nexport datasets"; `sinzlab/nexport` is private), and access to it.
4. **The Kubernetes config file** for the GPU servers.
5. **Etiquette for a personal container**: which compute server, what limits, and whether
   `ml-gpu-pipeline:cleaned` is the image to use.

Decided: lab-side work runs in a personal container from the lab's image on a compute server
(Doug, 2026-10-05). The key is installed. The skill for the lab is `als-remote-lab`, which carries the
`tunnel` and jump commands and the lab's knowledge.
