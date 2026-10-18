import { Bold, Chapter, Date, Emphasis, Heading, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { CodeBox, Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[24 September 2026](2026-09-24)</Date>
        </Dated>
        <Title>[[ 24 September 2026 ]]</Title>
        <Message
            at="2026-09-24T13:30:34.869795Z"
        >
            <Origin>01a0d39c-5520-7ccb-9f76-6200380eaad8</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I have a windows machine and I am doing computationally heavy stuff. I work with a scientist who says he has
                a linux workstation for me. He connects with RustDesk. We want to find a way for me to be able to dispatch
                code onto the machine, run it, and get the results.
            </Paragraph>
            <Paragraph>
                Perhaps docker + github might be a useful way - images stored in the project, they can run locally on my
                machine to test, I can dispatch them to the linux machine, and it can commit, and then I can update my repo
                to get results?
            </Paragraph>
            <Paragraph>Something like that</Paragraph>
            <Paragraph>Is that a semi-standard way?</Paragraph>
        </Message>
        <Message
            at="2026-09-24T13:30:48.542973Z"
        >
            <Origin>01a0d39c-5520-7401-a88a-70b2d7cc22f3</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Your instinct is sound, and pieces of it are very standard. Docker for reproducibility and GitHub for code
                are exactly what most people use. The one part that's less common is using git commits as the channel for
                <Word>
                    <Emphasis />
                    results
                </Word>, since git handles large or binary outputs poorly and the history bloats fast. There are a few
                well-trodden setups close to what you described.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. GitHub Actions with a self-hosted runner (closest to your idea)
                </Word>
            </Paragraph>
            <Paragraph>
                Your colleague installs GitHub's runner agent on the Linux box and registers it to your repo. You then push,
                or click "Run workflow," and the job executes on his machine inside your Docker image. Results come back as
                workflow artifacts you download, or get pushed to a results branch or to object storage (S3, Backblaze B2,
                etc.). This is a common pattern in labs and ML teams. It needs no inbound ports on his side, because the
                runner polls GitHub outbound, which makes it IT-friendly. One caveat: keep the repo private, because a
                self-hosted runner on a public repo lets anyone's pull request run code on his machine. Also, if the work
                uses a GPU, the runner needs the NVIDIA container toolkit so Docker can see it.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. SSH plus Docker (the most common interactive setup)
                </Word>
            </Paragraph>
            <Paragraph>
                RustDesk is a remote desktop tool, so it's awkward for dispatching jobs. The usual fix is to put both
                machines on Tailscale, a zero-config VPN that works through NATs and firewalls, and use plain SSH. From
                Windows you can then:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    run <Word>
                        <Verbatim />
                        docker context create linuxbox --docker "host=ssh://you@linuxbox"
                    </Word>, so <Word>
                        <Verbatim />
                        docker run
                    </Word> commands from your machine execute on his,
                </Line>
                <Line>or use VS Code Remote-SSH to edit and run directly on the box,</Line>
                <Line>
                    and pull results back with <Word>
                        <Verbatim />
                        rsync
                    </Word> or <Word>
                        <Verbatim />
                        scp
                    </Word>, or mount a shared folder.
                </Line>
            </Paragraph>
            <Paragraph>
                This gives you the tightest loop: build and test locally, then flip the Docker context and run remotely with
                the same commands.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    3. A job queue (if you'll run many jobs)
                </Word>
            </Paragraph>
            <Paragraph>
                For parameter sweeps or long queues, people add a light scheduler on top of option 2, for example Slurm
                (heavyweight), <Word>
                    <Verbatim />
                    task-spooler
                </Word>/<Word>
                    <Verbatim />
                    ts
                </Word> (tiny), or a Python tool like Ray or Prefect. That's probably overkill to start.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    A practical hybrid
                </Word>
            </Paragraph>
            <Paragraph>
                Keep code and the Dockerfile in GitHub, and build the image on the Linux box (or push it to GitHub Container
                Registry). Dispatch jobs over SSH through Tailscale, or through a self-hosted runner if you prefer
                push-to-run. Write results to a synced directory or a bucket. Commit only small summaries (metrics, CSVs,
                plots) to git so you still get a versioned record of which code produced which numbers.
            </Paragraph>
            <Paragraph>
                If you tell me roughly what the jobs look like (duration, whether they use a GPU, how large the outputs
                are), I can sketch the concrete config, such as a workflow YAML for option 1 or the Tailscale and
                Docker-context setup for option 2.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-24T13:32:38.705509Z"
        >
            <Origin>01a0d39e-3948-7bb1-8004-e945d5b08585</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                No I want Claude Code to be able to push actions if possible. Like it is part of the development workflow.
                But I am okay with workflows to be creating a new branch, checking out, running this thing, committing the
                result - something like that. And then I can send off multiple of those. How about that?
            </Paragraph>
            <Paragraph>And all I need to do is be able to kick off a task on the machine</Paragraph>
            <Paragraph>So let's design that. What could it look like</Paragraph>
        </Message>
        <Message
            at="2026-09-24T13:33:13.325077Z"
        >
            <Origin>01a0d39e-3948-7ec4-8f70-c01a4f93dfa0</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Here's a design where a git branch <Word>
                    <Emphasis />
                    is
                </Word> the job. Claude Code creates the branch, pushes it, and the Linux box notices, runs it, and commits
                results back to the same branch. Every result then sits next to the exact code snapshot that produced it,
                which is good for reproducibility.
            </Paragraph>
            <Heading>The shape of it</Heading>
            <CodeBox>
                {`Claude Code (Windows)                GitHub                    Linux box
─────────────────────                ──────                    ─────────
dispatch.sh "sweep-lr" "python ..."
  → branch jobs/sweep-lr              push ──────────────────→  self-hosted runner picks it up
  → commit job.sh, push                                         docker build, docker run job.sh
                                                                commit results/ to jobs/sweep-lr
gh run watch / git fetch    ←──────────────────────────────── push
collect.sh sweep-lr → results locally`}
            </CodeBox>
            <Paragraph>
                Your colleague does a one-time setup. After that, the only thing anyone does is push a <Word>
                    <Verbatim />
                    jobs/*
                </Word> branch.
            </Paragraph>
            <Heading>Repo layout</Heading>
            <CodeBox>
                {`Dockerfile
src/...
.github/workflows/run-job.yml
scripts/dispatch.sh
scripts/collect.sh
CLAUDE.md`}
            </CodeBox>
            <Paragraph>
                On a job branch, two more things appear: <Word>
                    <Verbatim />
                    job.sh
                </Word> (the command to run) and <Word>
                    <Verbatim />
                    results/
                </Word> (written by the job).
            </Paragraph>
            <Heading>The workflow</Heading>
            <Paragraph>
                <Word>
                    <Verbatim />
                    .github/workflows/run-job.yml
                </Word>:
            </Paragraph>
            <CodeBox
                language="yaml"
            >
                {`${''}name: run-job
on:
  push:
    branches: ['jobs/**']

permissions:
  contents: write

concurrency:
  group: \${{ github.ref }}      # re-pushing a job branch cancels its old run
  cancel-in-progress: true

jobs:
  run:
    runs-on: [self-hosted, linux, compute]
    timeout-minutes: 7200        # self-hosted jobs can run up to 5 days
    steps:
      - uses: actions/checkout@v4

      - name: Build image
        run: docker build -t job:\${{ github.sha }} .

      - name: Run job
        run: |
          mkdir -p results
          docker run --rm \\
            --user $(id -u):$(id -g) \\
            -v "$PWD":/work -w /work \\
            job:\${{ github.sha }} \\
            bash job.sh 2>&1 | tee results/log.txt
          # add --gpus all above if needed

      - name: Commit results
        if: always()               # commit logs even when the job fails
        run: |
          git config user.name  "compute-runner"
          git config user.email "runner@localhost"
          echo "\${{ job.status }}" > results/STATUS
          git add results/
          git commit -m "[results] \${{ github.ref_name }}" || exit 0
          git push`}
            </CodeBox>
            <Paragraph>A few design notes:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Pushes made with the workflow's own token don't trigger new runs, so the results commit won't loop.
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        --user
                    </Word> keeps output files owned by the runner user instead of root, which otherwise breaks the commit
                    step.
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        if: always()
                    </Word> means a crashed job still sends back its log and a <Word>
                        <Verbatim />
                        STATUS
                    </Word> file.
                </Line>
            </Paragraph>
            <Heading>Dispatch script (what Claude Code calls)</Heading>
            <Paragraph>
                This uses a git worktree, so dispatching never disturbs your current checkout, and you or Claude Code can
                fire off several jobs in a row.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Verbatim />
                    scripts/dispatch.sh
                </Word>:
            </Paragraph>
            <CodeBox
                language="bash"
            >
                {`#!/usr/bin/env bash
# usage: scripts/dispatch.sh <job-name> "<command>"
set -euo pipefail
name="$1"; cmd="$2"
branch="jobs/\${name}"
wt=$(mktemp -d)

git worktree add -b "$branch" "$wt" HEAD
printf '#!/usr/bin/env bash\\nset -euo pipefail\\n%s\\n' "$cmd" > "$wt/job.sh"
git -C "$wt" add job.sh
git -C "$wt" commit -m "job: \${name}"
git -C "$wt" push -u origin "$branch"
git worktree remove "$wt"
echo "dispatched \${branch}"`}
            </CodeBox>
            <Paragraph>
                Because it branches from <Word>
                    <Verbatim />
                    HEAD
                </Word>, it includes committed work only. Claude Code should commit first, and the CLAUDE.md below tells it
                to.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Verbatim />
                    scripts/collect.sh
                </Word>:
            </Paragraph>
            <CodeBox
                language="bash"
            >
                {`#!/usr/bin/env bash
# usage: scripts/collect.sh <job-name>
set -euo pipefail
name="$1"
git fetch origin "jobs/\${name}"
mkdir -p "results/\${name}"
git archive "origin/jobs/\${name}" results | tar -x --strip-components=1 -C "results/\${name}"
cat "results/\${name}/STATUS" 2>/dev/null || echo "not finished"`}
            </CodeBox>
            <Paragraph>
                On Windows these run fine in Git Bash, which Claude Code uses anyway. Status checks use the GitHub CLI:
                <Word>
                    <Verbatim />
                    gh run list --branch jobs/&lt;name&gt;
                </Word> and <Word>
                    <Verbatim />
                    gh run watch
                </Word>.
            </Paragraph>
            <Heading>CLAUDE.md section</Heading>
            <Paragraph>This is what makes it part of Claude Code's workflow:</Paragraph>
            <CodeBox
                language="markdown"
            >
                {`## Remote compute
Heavy jobs run on a Linux workstation via GitHub Actions.
- To run something remotely: commit your changes, then
  \`scripts/dispatch.sh <short-name> "<command>"\` (command runs inside the Docker image, repo root as cwd).
- Jobs must write outputs to \`results/\`. Keep outputs small (summaries, CSVs, plots); large files go elsewhere.
- Multiple jobs can be dispatched back to back; each gets its own branch.
- Check status: \`gh run list --branch jobs/<name>\`; wait: \`gh run watch\`.
- When done: \`scripts/collect.sh <name>\` → local \`results/<name>/\`. Check \`STATUS\` and \`log.txt\`.
- Test locally first when feasible: \`docker build -t job . && docker run --rm -v "$PWD":/work -w /work job bash job.sh\`.`}
            </CodeBox>
            <Heading>Parallelism</Heading>
            <Paragraph>
                One runner runs one job at a time, and the other jobs queue on GitHub. If the machine can handle several
                jobs at once, your colleague registers N runners on the same box (separate directories, same <Word>
                    <Verbatim />
                    compute
                </Word> label), and GitHub spreads the queue across them. With GPUs, you'd register one runner per GPU and
                pin each one via <Word>
                    <Verbatim />
                    NVIDIA_VISIBLE_DEVICES
                </Word> in its environment.
            </Paragraph>
            <Heading>Colleague's one-time setup</Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    Install Docker, plus the NVIDIA container toolkit if you're using GPUs, and add the runner user to the
                    <Word>
                        <Verbatim />
                        docker
                    </Word> group.
                </Line>
                <Line>
                    In the repo, go to Settings → Actions → Runners → New self-hosted runner, follow the Linux instructions,
                    add the label <Word>
                        <Verbatim />
                        compute
                    </Word>, and install it as a service (<Word>
                        <Verbatim />
                        ./svc.sh install &amp;&amp; ./svc.sh start
                    </Word>).
                </Line>
                <Line>
                    Keep the repo <Word>
                        <Bold />
                        private
                    </Word>. On a public repo, strangers' pull requests could execute on his machine.
                </Line>
            </Paragraph>
            <Paragraph>
                The runner only makes outbound connections to GitHub, so no ports, VPN, or RustDesk are involved.
            </Paragraph>
            <Heading>Things to decide</Heading>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Output size.
                    </Word> Git is fine up to a few MB per job. For larger outputs, the workflow can add an <Word>
                        <Verbatim />
                        actions/upload-artifact
                    </Word> step (downloaded with <Word>
                        <Verbatim />
                        gh run download
                    </Word>) or sync to a bucket, and commit only a pointer.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Branch cleanup.
                    </Word> Job branches pile up. You can keep them as a record or prune them periodically with <Word>
                        <Verbatim />
                        git push origin --delete jobs/...
                    </Word>.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Image rebuild cost.
                    </Word> The build runs on every job, but Docker's layer cache on the box makes it nearly free unless
                    dependencies change. If the image gets heavy, you'd prebuild it and push it to GitHub Container
                    Registry.
                </Line>
            </Paragraph>
            <Paragraph>
                I can put this together as actual files in a starter repo layout if you give me the language or stack and
                whether it needs a GPU.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-24T13:36:56.454145Z"
        >
            <Origin>01a0d3a2-284c-7d1f-833f-f9a145c7970b</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Hmm, make it clear to me what the steps are in a small list. The idea is the repo contains the code. I
                should be able to run whatever this is locally to test. I should be able to dispatch to the machine. The
                thing I dispatch does a longrunning things and then commits the result in batch. But what is run should be
                dispatchable by hand.
            </Paragraph>
            <Paragraph>
                And then the whole dispatched process creates a new branch (probably specified in dispatch), checkout fresh,
                and commits everythign commitable back at the end
            </Paragraph>
            <Paragraph>
                And then we can cherry-pick what we want to promote to main I suppose, figures and what not
            </Paragraph>
        </Message>
        <Message
            at="2026-09-24T13:37:28.015995Z"
        >
            <Origin>01a0d3a2-284c-7aa3-9380-cb794a374f96</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Here's the flow as a short list, updated to match what you described: dispatch by hand, a fresh checkout on
                the machine, a branch named at dispatch time, and everything committed at the end.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    One-time setup
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Your colleague installs Docker and a GitHub self-hosted runner on the Linux box, labeled <Word>
                        <Verbatim />
                        compute
                    </Word>.
                </Line>
                <Line>
                    The repo gets four things: a <Word>
                        <Verbatim />
                        Dockerfile
                    </Word>, a <Word>
                        <Verbatim />
                        run.sh
                    </Word> (the single entry point for the long job), a small <Word>
                        <Verbatim />
                        local.sh
                    </Word>, and a workflow file <Word>
                        <Verbatim />
                        .github/workflows/dispatch.yml
                    </Word>. The workflow file has to be on <Word>
                        <Verbatim />
                        main
                    </Word> for dispatch to show up.
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        .gitignore
                    </Word> defines what counts as "committable." Anything too big to commit, like checkpoints or raw dumps,
                    goes in there.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Each time
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Test locally:
                    </Word> <Word>
                        <Verbatim />
                        ./local.sh &lt;args&gt;
                    </Word>. This builds the image and runs <Word>
                        <Verbatim />
                        run.sh
                    </Word> inside it on your machine, so it's the same thing the Linux box runs.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Push your code
                    </Word> to any branch.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Dispatch:
                    </Word> <Word>
                        <Verbatim />
                        gh workflow run dispatch.yml --ref &lt;code-branch&gt; -f branch=runs/lr-sweep -f args="..."
                    </Word>. You can type this yourself, click the "Run workflow" button on GitHub, or have Claude Code run
                    it. To launch several jobs, just repeat it with different names.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        The machine runs it:
                    </Word> it does a fresh checkout of <Word>
                        <Verbatim />
                        &lt;code-branch&gt;
                    </Word>, creates <Word>
                        <Verbatim />
                        runs/lr-sweep
                    </Word>, builds the image, runs <Word>
                        <Verbatim />
                        run.sh &lt;args&gt;
                    </Word> for however long it takes, then does <Word>
                        <Verbatim />
                        git add -A
                    </Word>, commits, and pushes the new branch. It does this even if the job fails, so you still get the
                    log.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Check on it:
                    </Word> <Word>
                        <Verbatim />
                        gh run list
                    </Word> or <Word>
                        <Verbatim />
                        gh run watch
                    </Word>.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Promote to main:
                    </Word> cherry-picking the results commit brings over everything at once. To take only certain files,
                    from <Word>
                        <Verbatim />
                        main
                    </Word> run <Word>
                        <Verbatim />
                        git checkout runs/lr-sweep -- figures/fig3.png
                    </Word> and commit.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The two files that matter
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Verbatim />
                    local.sh
                </Word>:
            </Paragraph>
            <CodeBox
                language="bash"
            >
                {`docker build -t proj . && docker run --rm -v "$PWD":/work -w /work proj bash run.sh "$@"`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Verbatim />
                    .github/workflows/dispatch.yml
                </Word>:
            </Paragraph>
            <CodeBox
                language="yaml"
            >
                {`${''}name: dispatch
on:
  workflow_dispatch:
    inputs:
      branch: { description: "Branch to create for results", required: true }
      args:   { description: "Arguments to run.sh", default: "" }

permissions:
  contents: write

defaults:
  run:
    shell: bash          # gives pipefail, so a failing job isn't masked by tee

jobs:
  run:
    runs-on: [self-hosted, compute]
    timeout-minutes: 7200
    env:
      BRANCH: \${{ inputs.branch }}
      ARGS: \${{ inputs.args }}
    steps:
      - uses: actions/checkout@v4          # fresh, clean checkout of --ref
      - run: git checkout -b "$BRANCH"
      - run: docker build -t proj:\${{ github.sha }} .
      - run: |
          docker run --rm --user $(id -u):$(id -g) -v "$PWD":/work -w /work \\
            proj:\${{ github.sha }} bash run.sh $ARGS 2>&1 | tee run.log
      - if: always()
        run: |
          git config user.name compute-runner
          git config user.email runner@localhost
          git add -A
          git commit -m "results: $BRANCH (\${{ job.status }})" || exit 0
          git push -u origin "$BRANCH"`}
            </CodeBox>
            <Paragraph>
                Two practical notes. First, one runner runs one job at a time, and additional dispatches wait in a queue. If
                the box can handle parallel jobs, your colleague can register a few runners on it. Second, the job only sees
                code you've pushed, so for Claude Code the rule is "commit and push, then dispatch." That one line goes in
                CLAUDE.md along with the dispatch command.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-24T13:42:34.674321Z"
        >
            <Origin>01a0d3a7-5138-710b-b5d5-d5d6f3ce7644</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I'm training big neural netowrky things. We probably don't want docker. How about just the repo has code to
                run, and the unit is something like - creates branch, trigggers pull of branch, runs something, commits on
                that machine to the branch
            </Paragraph>
            <Paragraph>
                And then locally you and I can fetch from the branch, which is a branch of our current repo, when we are
                done
            </Paragraph>
            <Paragraph>
                THe repo allows you to teleport onto the machine, even though you aren't there, and then you can control
                what happens there because it's a mirror of what's here
            </Paragraph>
        </Message>
        <Message
            at="2026-09-24T13:44:42.526839Z"
        >
            <Origin>01a0d3a7-5138-72ec-8af8-11f7785b79b2</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Without Docker, this gets simpler. Git becomes the whole control channel, and a small watcher script on the
                Linux box does the pulling, so GitHub Actions isn't needed either. That also avoids two Actions limits that
                would hit multi-day training: its push token expires after 24 hours, and self-hosted jobs are capped at 5
                days. In your terms, the branch is the teleporter. You write <Word>
                    <Verbatim />
                    RUN
                </Word> into it here, and <Word>
                    <Verbatim />
                    STATUS
                </Word>, <Word>
                    <Verbatim />
                    run.log
                </Word>, and the results come back through it from there.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The loop
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Launch (here).
                    </Word> <Word>
                        <Verbatim />
                        scripts/launch.sh lr-sweep "python train.py --config configs/big.yaml"
                    </Word> creates <Word>
                        <Verbatim />
                        runs/lr-sweep
                    </Word> from your current commit, adds a one-line <Word>
                        <Verbatim />
                        RUN
                    </Word> file with the command, and pushes. You or Claude Code can do this.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Pick up (there).
                    </Word> Every minute the watcher fetches and looks for <Word>
                        <Verbatim />
                        runs/*
                    </Word> branches that don't have a <Word>
                        <Verbatim />
                        STATUS
                    </Word> file yet. For each one it makes a fresh checkout and claims it by pushing <Word>
                        <Verbatim />
                        STATUS: running
                    </Word>.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Run (there).
                    </Word> It runs the <Word>
                        <Verbatim />
                        RUN
                    </Word> command in the project environment for as long as it takes. Checkpoints go to <Word>
                        <Verbatim />
                        $RUN_DIR
                    </Word>, which is on the machine but outside the repo.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Commit (there).
                    </Word> It runs <Word>
                        <Verbatim />
                        git add -A
                    </Word>, which respects <Word>
                        <Verbatim />
                        .gitignore
                    </Word>, and skips anything over 50 MB. Then it writes <Word>
                        <Verbatim />
                        STATUS: done
                    </Word> or <Word>
                        <Verbatim />
                        failed
                    </Word>, commits along with <Word>
                        <Verbatim />
                        run.log
                    </Word>, and pushes.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Collect (here).
                    </Word> <Word>
                        <Verbatim />
                        git fetch
                    </Word>, then promote what you want to main with a cherry-pick or <Word>
                        <Verbatim />
                        git checkout origin/runs/lr-sweep -- figures/
                    </Word>.
                </Line>
            </Paragraph>
            <Paragraph>
                To test locally, run the same command on your machine with a small config. The box runs exactly the
                committed code, so nothing else differs.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                     0 
                </Word> (yours, runs in Git Bash):
            </Paragraph>
            <CodeBox
                language="bash"
            >
                {`#!/usr/bin/env bash
# usage: scripts/launch.sh <name> "<command>"   — launches from your current commit
set -euo pipefail
name="$1"; cmd="$2"; branch="runs/$name"
wt=$(mktemp -d)
git worktree add -q -b "$branch" "$wt" HEAD
echo "$cmd" > "$wt/RUN"
git -C "$wt" add RUN && git -C "$wt" commit -qm "launch $name"
git -C "$wt" push -q -u origin "$branch"
git worktree remove "$wt"
echo "launched $branch"`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                     0 
                </Word> (on the Linux box):
            </Paragraph>
            <CodeBox
                language="bash"
            >
                {`${''}#!/usr/bin/env bash
# Watches for runs/* branches and executes them.
set -uo pipefail
MIRROR=/data/runner/mirror      # clone made with the deploy key
WORK=/data/runner/work          # fresh worktree per run
DATA=/data/runs                 # checkpoints etc., outside git

cd "$MIRROR"
while true; do
  git fetch -q --prune origin
  for ref in $(git for-each-ref --format='%(refname:short)' refs/remotes/origin/runs/); do
    git cat-file -e "$ref:STATUS" 2>/dev/null && continue   # claimed or finished
    git cat-file -e "$ref:RUN"    2>/dev/null || continue   # nothing to run
    branch=\${ref#origin/}; name=\${branch#runs/}; wt="$WORK/$name"

    rm -rf "$wt"; git worktree prune
    git worktree add -q -B "$branch" "$wt" "$ref" && cd "$wt" || { cd "$MIRROR"; continue; }

    # claim: if another watcher got there first, this push is rejected and we skip
    echo "running on $(hostname) since $(date -Is)" > STATUS
    git add STATUS && git commit -qm "claim $name"
    git push -q origin "$branch" || { cd "$MIRROR"; continue; }

    # run in the project env (swap uv for conda run, etc.)
    export RUN_NAME="$name" RUN_DIR="$DATA/$name"; mkdir -p "$RUN_DIR"
    uv run --frozen bash RUN > run.log 2>&1
    rc=$?

    # commit everything committable
    [ $rc -eq 0 ] && s="done" || s="failed (exit $rc)"
    echo "$s at $(date -Is)" > STATUS
    git add -A
    find . -path ./.git -prune -o -type f -size +50M -print0 | xargs -0 -r git reset -q --
    git commit -qm "results $name: $s"
    git push -q origin "$branch"
    cd "$MIRROR"
  done
  sleep 60
done`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Colleague's one-time setup
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    On the machine, run <Word>
                        <Verbatim />
                        ssh-keygen
                    </Word> and add the public key to the GitHub repo as a deploy key with write access. The machine pushes
                    with this key, so nothing expires.
                </Line>
                <Line>
                    Clone the repo to <Word>
                        <Verbatim />
                        /data/runner/mirror
                    </Word> and set <Word>
                        <Verbatim />
                        git config user.name
                    </Word> and <Word>
                        <Verbatim />
                        user.email
                    </Word> there. Install uv, or whatever manages your environment.
                </Line>
                <Line>
                    Start <Word>
                        <Verbatim />
                        runner.sh
                    </Word> in tmux. Later, make it a systemd service so it survives reboots.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    For Claude Code (in CLAUDE.md)
                </Word>
            </Paragraph>
            <CodeBox
                language="markdown"
            >
                {`## Remote training
- Commit first, then \`scripts/launch.sh <name> "<command>"\`. The Linux box runs that commit.
- Big outputs go to \`$RUN_DIR\`. Anything in the repo tree that isn't gitignored gets committed.
- Status: \`git fetch -q && git show origin/runs/<name>:STATUS\` (missing means still queued).
- Promote results: \`git checkout origin/runs/<name> -- <paths>\`.`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Notes
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Several GPUs.
                    </Word> Run one watcher per GPU, each with its own clone and its own <Word>
                        <Verbatim />
                        CUDA_VISIBLE_DEVICES
                    </Word>. The claim step stops two watchers from taking the same branch. With a single watcher, launches
                    simply queue.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Progress mid-run.
                    </Word> The job runs inside a real checkout of its branch, so your training code can commit and push a
                    metrics file every few hours. You'd see it with <Word>
                        <Verbatim />
                        git fetch
                    </Word>.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        What gets committed.
                    </Word> <Word>
                        <Verbatim />
                        .gitignore
                    </Word> decides what counts as committable, so it should cover <Word>
                        <Verbatim />
                        .venv/
                    </Word>, datasets, and caches.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Security.
                    </Word> Anyone who can push a <Word>
                        <Verbatim />
                        runs/*
                    </Word> branch can run code on that box, so keep the repo private.
                </Line>
            </Paragraph>
        </Message>
        <Message
            at="2026-09-24T13:46:26.880422Z"
        >
            <Origin>01a0d3aa-dc3f-75ea-b839-e575c2847dd7</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                You, as Claude Code, have no problem talking to a remote machine. Isn't what's true that we just need - at
                minimum - a way to dispatch commands to a place with the repo and github installed - or one step out - a
                place to set that up?
            </Paragraph>
            <Paragraph>
                You can update, create branches, get things running, commit pull and push between as needed. No docker
                required. Just push on one side, pull on the other, and send commands across the wire right?
            </Paragraph>
        </Message>
        <Message
            at="2026-09-24T13:47:08.093704Z"
        >
            <Origin>01a0d3aa-dc3f-7712-ae58-fb65dad0cf77</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes. Given an SSH connection, I can drive the box directly from Claude Code: fetch, branch, start the run,
                check on it, and have it commit and push at the end, then you pull here. The watcher and Actions setups were
                only standing in for a missing command channel. RustDesk is a remote desktop, so SSH is the only missing
                piece.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Minimum setup (one time; can be done during a RustDesk session)
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Reachability.
                    </Word> Install <Word>
                        <Verbatim />
                        openssh-server
                    </Word> on the box. If it's behind a university or home NAT, add Tailscale on both machines. With a
                    <Word>
                        <Verbatim />
                        Host box
                    </Word> entry in <Word>
                        <Verbatim />
                        ~/.ssh/config
                    </Word>, <Word>
                        <Verbatim />
                        ssh box
                    </Word> then works from Windows, which ships an OpenSSH client.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Key auth.
                    </Word> Put your public key in <Word>
                        <Verbatim />
                        ~/.ssh/authorized_keys
                    </Word> on the box. Commands I send can't answer a password prompt.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Repo and push rights on the box.
                    </Word> The box needs a clone, your environment, and a way to push, either a deploy key with write
                    access or your GitHub credentials.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    After that, a run is just:
                </Word>
            </Paragraph>
            <CodeBox
                language="bash"
            >
                {`git push                                     # here
ssh box 'cd ~/proj && git fetch -q && git worktree add -q -b runs/lr-sweep ~/runs/lr-sweep origin/main'
ssh box 'cd ~/runs/lr-sweep && tmux new -d -s lr-sweep "python train.py --config configs/big.yaml > run.log 2>&1; git add -A; git commit -qm results; git push -q -u origin runs/lr-sweep"'
ssh box 'tail -n 20 ~/runs/lr-sweep/run.log'  # check in anytime
git fetch && git checkout origin/runs/lr-sweep -- figures/   # promote what you want`}
            </CodeBox>
            <Paragraph>You can type exactly the same commands by hand.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Details that matter
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Detach the run.
                    </Word> Training has to live in tmux (or <Word>
                        <Verbatim />
                        nohup
                    </Word>/<Word>
                        <Verbatim />
                        systemd-run
                    </Word>) on the box. A foreground job would die when the SSH session ends or when my command times out.
                    Because commit and push are chained onto the end of the same tmux command, results land even if nobody
                    is connected. The <Word>
                        <Verbatim />
                        ;
                    </Word> means a crashed run still commits its log.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        One worktree per run.
                    </Word> Parallel runs then never share a working directory. I'd check <Word>
                        <Verbatim />
                        nvidia-smi
                    </Word> before launching onto a GPU that's already busy.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                         0  decides what  1  picks up.
                    </Word> Checkpoints should go outside the repo or into ignored paths.
                </Line>
            </Paragraph>
            <Paragraph>
                Once SSH works, a short CLAUDE.md note with the host name, the clone and runs paths, and how to activate the
                environment is all I'd need to do this routinely.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-24T13:58:39.160878Z"
        >
            <Origin>01a0d3b6-0892-7575-a2d0-7f025fce3409</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                So if you were going to create a simple todo that factors in that once its setup, you can do the rest, what
                do David and I have to do minimally to get this working?
            </Paragraph>
        </Message>
        <Message
            at="2026-09-24T13:59:32.142075Z"
        >
            <Origin>01a0d3b6-0892-7db3-963b-9f9eb80aaa51</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Here's the minimal split. David's part needs admin rights on the box. Yours is account-level things I can't
                do from here. Everything after that I can do over SSH.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    David (on the Linux box, about 10 minutes; commands assume Ubuntu/Debian)
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Install the basics: <Word>
                        <Verbatim />
                        sudo apt install openssh-server tmux git
                    </Word>
                </Line>
                <Line>
                    Join your Tailscale network using the auth key you send him: <Word>
                        <Verbatim />
                        curl -fsSL https://tailscale.com/install.sh | sh
                    </Word> <Word>
                        <Verbatim />
                        sudo tailscale up --authkey &lt;key&gt;
                    </Word>
                </Line>
                <Line>
                    Create a login for you and add your public key to it: ``<Word>
                        <Verbatim />
                        bash sudo adduser doug sudo mkdir -p /home/doug/.ssh echo "&lt;your public key&gt;" | sudo tee /home/doug/.ssh/authorized_keys sudo chown -R doug:doug /home/doug/.ssh sudo chmod 700 /home/doug/.ssh &amp;&amp; sudo chmod 600 /home/doug/.ssh/authorized_keys 
                    </Word>``
                </Line>
                <Line>Tell you which GPUs and which disk path you're free to use.</Line>
            </Paragraph>
            <Paragraph>
                If it's an institutional machine, he may want to confirm that Tailscale is allowed. If he'd rather not do
                this himself, he can give you a login with sudo and you can run these steps over RustDesk.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    You (on Windows)
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Install Tailscale and sign in. In the admin console, go to Settings → Keys, generate an auth key, and
                    send it to David. Once the box appears under Machines, choose "Disable key expiry" for it so the
                    connection doesn't lapse in six months.
                </Line>
                <Line>
                    Make an SSH key in PowerShell with <Word>
                        <Verbatim />
                        ssh-keygen -t ed25519
                    </Word>. Leave the passphrase empty so my commands don't stall on a prompt. Send David the contents of
                    <Word>
                        <Verbatim />
                        ~\.ssh\id_ed25519.pub
                    </Word>.
                </Line>
                <Line>
                    Make sure <Word>
                        <Verbatim />
                        gh auth login
                    </Word> has been done, so I can register the box's deploy key with GitHub.
                </Line>
                <Line>Tell me the box's Tailscale name and your username on it.</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Then I take it from there
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Add a <Word>
                        <Verbatim />
                        Host box
                    </Word> entry to your SSH config and test the connection.
                </Line>
                <Line>Survey the box: GPUs, CUDA, disk space, Python.</Line>
                <Line>
                    Create a deploy key on the box and register it with <Word>
                        <Verbatim />
                        gh
                    </Word>, so the box can push.
                </Line>
                <Line>Clone the repo on the box and build the environment.</Line>
                <Line>Add the remote-training section to CLAUDE.md.</Line>
                <Line>Do a tiny end-to-end test run: branch, run, commit, push, fetch.</Line>
            </Paragraph>
        </Message>
        <Message
            at="2026-09-24T14:59:24.513834Z"
        >
            <Origin>01a0d3ed-a6fa-7359-b1a1-110503e72174</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                We are trying to connect to RustDesk. I entered his id. It asks for a password. I think its the one on the
                machine there. Is it? How do we set it up?
            </Paragraph>
        </Message>
        <Message
            at="2026-09-24T14:59:48.488815Z"
        >
            <Origin>01a0d3ed-a6fa-77ed-bed9-feb00f7e988f</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Probably not. That prompt usually wants RustDesk's own password, not the Linux login password.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    To connect now:
                </Word> David opens RustDesk on his machine. Under his ID there's a one-time password, a short random string
                that changes after each session. He reads it to you and you enter it. Another option is that he switches
                RustDesk to accept by click, in which case your connection attempt pops up an "Accept" button on his screen.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    To connect later without David:
                </Word> he sets a permanent password in RustDesk on his machine, under Settings → Security (he may need to
                click "Unlock security settings" first), then "Set permanent password." In the same section, sessions need
                to be accepted via password, or via both password and click, rather than click only. Exact labels vary a
                little by version, and in some versions there's a pencil icon next to the one-time password that does the
                same thing.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Where the machine's password comes in:
                </Word> if you connect and the Linux desktop is locked, or sitting at the login screen, you type David's (or
                your) Linux login password there, inside the remote screen.
            </Paragraph>
            <Paragraph>
                Since we only need RustDesk long enough to set up SSH, the one-time password is enough for today. A
                permanent password is useful as a backup way in, for example if SSH ever breaks. If you get a black screen
                or can't connect when nobody is logged in, that's usually Linux running Wayland. RustDesk works better when
                David picks "Ubuntu on Xorg" from the gear icon on the login screen.
            </Paragraph>
        </Message>
        <Message
            at="2026-09-24T15:00:09.287683Z"
        >
            <Origin>01a0d3ee-5609-7fcf-bb90-65882335bb8c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                No I mean there is a RD client, and it has as password and it is asking me for the rustdesk password
            </Paragraph>
        </Message>
        <Message
            at="2026-09-24T15:00:17.568977Z"
        >
            <Origin>01a0d3ee-5609-72eb-b43e-988603d57d1f</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                The password shown in your own RustDesk client belongs to your machine. It's what someone would enter to
                connect <Word>
                    <Emphasis />
                    to you
                </Word>, so it won't work here.
            </Paragraph>
            <Paragraph>
                The password you need is the one shown in the RustDesk window on David's machine, directly under his ID.
                Each side's RustDesk shows its own ID and password, and whoever connects types in the other side's pair.
            </Paragraph>
            <Paragraph>
                So David opens RustDesk on the Linux box and reads you the password shown there, and you enter that. If it's
                rejected, it has probably refreshed, since one-time passwords change after each session. Have him read the
                current one. If he sets a permanent password there instead, you can reuse it.
            </Paragraph>
        </Message>
    </Chapter>
);
