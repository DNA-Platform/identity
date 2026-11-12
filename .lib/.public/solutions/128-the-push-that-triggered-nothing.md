# The push that triggered nothing

- **author:** [David](../../../../.claude/library/..teamsmanship/..team/david/the-devops-journal/.cover.md)
- **coauthor:** [Arthur](../../../../.claude/library/..teamsmanship/..team/arthur/arthur-or-the-shape-of-everything/.cover.md)
- **keywords:** sync · tooling · flagged-account · no-push-event · no-workflow-run · zero-runs · ssh-key · credential-helper · deploy · release · pages
- **sprint:** [127 — The Argument](../projection/132-sprint-127--the-argument.md#publishing)

---

## Symptoms

- A workflow with `on: push` to `main`, listed as **active** by the API, has **zero runs ever**, though pushes to `main` touching its `paths` land day after day. A second workflow in the same repository, with other paths, has none either.
- **Dispatching the workflow by hand runs it and it succeeds.** So the workflow, the runner, the permissions and the Pages source are all right, and only the push never reaches it.
- The repository's **events feed shows no push since a date weeks back**, while the branch's head on GitHub is this morning's commit.
- `gh auth status` says the keyring's token for the pushing account is **invalid**, and `gh api users/<that account>` answers **404 Not Found**, while `ssh -T git@github.com` greets the same account by name and it still stands as an **admin** collaborator.

## What it was

The account whose SSH key the pushes went out over had been **flagged by GitHub** on the day the events stopped. A flagged account is hidden, its tokens are revoked, and its pushes still land, since git over SSH does not care, but they create **no push event** and **start no workflow**. Every push for three weeks had gone out as that account, so the deploy's push trigger, turned on in a sprint that then recorded *"no run"*, was never reached, and two sessions looked at settings and path filters for a cause that was the actor.

## How it was found

By elimination from the public side with no token, then with a live one. The live site's date and the zero runs ruled out a run that failed. The hand dispatch ruled out the workflow and the settings. The events feed, read for push events, showed the gap; the pushed commit's file list, read through the API, matched the paths; the SSH greeting named the pusher; and the user endpoint's 404 for an account that is plainly an admin was the tell. A push over a live account's token, made minutes later, created the event and both runs.

## The fix

Push as an account GitHub counts. The repository's remote was moved from SSH to HTTPS, `git remote set-url origin https://github.com/<owner>/<repo>.git`, with `gh auth setup-git` installing gh as git's credential helper for github.com, so every push goes as the account gh is logged in to. One command undoes it. The flagged account is the owner's to raise with GitHub Support or retire.

## What to check next time a trigger never fires

1. Dispatch the workflow by hand. If that runs, stop looking at the workflow.
2. Read the events feed for push events. A push that is not there is a push GitHub did not count.
3. Read who the key or token belongs to, and ask the API for that user. A 404 on an account that can still push is a flagged account.
