# als-remote-lab

- **author:** [Adam](../../../.claude/library/..teamsmanship/..team/adam/adam-between-the-wires/.cover.md)
- **coauthor:** [David](../../../.claude/library/..teamsmanship/..team/david/the-devops-journal/.cover.md)

---

Reach the Reimer lab at BCM through the lab box: the lab's database, its compute servers and its GPU cluster, worked the way the lab works. This is the sibling of [als-remote](01-als-remote.md), which drives the box itself. The box is on the BCM network, and this skill goes *through* it.

**This skill is where everything about the lab collects.** Doug, 2026-10-05: *"als-remote-lab - for the skill name, and we will use that to aggregate. I must insist that we use github to keep everything in sync, and that when doing long running work, we make branches and merge back into main so we have a record of the state of the system at the time. We prefer data in github if it fits."* And: *"we want to be doing things in the standard way for the lab, using the standard code"*, *"We are them. I am hired in the lab"*, *"I want to be as autonomous as possible without damaging anything."*

## The protocols

1. [The Reimer lab](02-01-als-remote-lab--the-reimer-lab.md) — what is reachable and how. Where our data is at the source (33977 in both processings). How the lab works by the book: personal containers from the lab's registry on the compute servers, tables filled by the lab's jobs, credentials in a `.env` beside the compose file. What our grant allows, and what has been asked of the lab.

## The chain

```
this machine ──Tailscale SSH──► the box (lipshutzlab-01, on BCM's network) ──► jr-database, jr-compute001/003/005, the GPU cluster
```

- **Every login is by this machine's key**, `~/.ssh/reimer_ed25519`, jumping through the box (`ssh -J`). The box forwards the connection and holds nothing, because its account is shared and a key stored there would let anyone on it into doug's lab account. The public half is in doug's `authorized_keys` on each compute server.
- **The lab password** is `REIMER_PASSWORD` in `.env` at the project root here, and nowhere else (the [Root](01-06-als-remote--root.md) rule). It reaches the lab only as the first line of a process's stdin: never on a command line, never in an environment that `docker inspect` would show the whole docker group, never in a file. Every record is checked for it before it is committed.
- **The database here, when wanted:** `tunnel up` makes the lab database `127.0.0.1:13306` on this machine, through the box.
- **The GPU cluster:** its config is a client key, kept like the SSH key at `~/.kube/jr-k8s.yaml` on this machine only. `kube` forwards the API server through the box and runs kubectl here, in the namespace `doug` ([The GPU cluster](02-01-als-remote-lab--the-reimer-lab.md#the-gpu-cluster)).

## Doing things by the book

- **The lab's code, in the lab's image.** A container runs from `ml-gpu-pipeline:cleaned` (the image Erin's notebook uses, with the lab's `pipeline`, `stimulus` and `datajoint 0.12.9`) unless `LAB_IMAGE` names another. Its CPU and memory are capped (`LAB_CPUS`, default 4; `LAB_MEMORY`, default 16g) until the lab says what limits it uses. The lab's storage is mounted **read-only**. A container launched by hand goes on **jr-compute003**, which the lab keeps off Kubernetes for large-memory work (Cameron, 2026-10-05). Work on the cluster goes through `kube`.
- **Read the lab's tables; write only ours.** `pipeline_*` is the lab's: our grant reads it, and a populate there is the lab's to run or to grant. Our own tables go in `doug_*`.
- **Never touch another person's container,** home or job. On a shared server we look at what is running and do not stop it.

## Records — everything in GitHub

A check or a container run is **recorded**: the command or file and everything it printed land in `runs/lab/<time>-<name>.*`, are committed and pushed, and the box is brought into step (`sync`). A record containing the lab password is refused. Long-running lab work will run on a branch and be merged back into `main`, the box's run protocol carried to the lab ([The run](01-03-als-remote--the-run.md)). That needs the compute servers to reach GitHub, so it is built when the first long job needs it.

## Commands

```
L=src/.lib/the-skillset/02-als-remote-lab--lab.sh
bash $L check                              # key logins to every compute server; the database through the box
bash $L run <host> '<command>'             # on jr-compute 001, 003 or 005, not recorded
bash $L probe <name> <host> '<command>'    # the same, recorded in runs/lab/ and committed
bash $L container <name> <host> <file.py>  # a Python file in the lab's image; PASSWORD is set from stdin
bash $L tunnel up|down|status              # the lab database on 127.0.0.1:13306 here; down closes every forward
bash $L kube <kubectl arguments>           # kubectl on the GPU cluster, namespace doug, through the box
```

Inside a `container` file, `PASSWORD` already holds the lab password. The file sets
`dj.config["database.password"] = PASSWORD` and never prints it.

**Adding a protocol.** As in [als-remote](01-als-remote.md): a sub-chapter `02-NN-als-remote-lab--<name>.md`, listed here and on [The Skillset](.cover.md) cover, the tool gains what it needs, and the skill is recompiled.
