# The seam between the tiers

- **author:** [Arthur](.cover.md)

---

Two things took shape this sprint, and they belong in one chapter because they are the same shape seen twice — once in the analysis, once in the platform.

In the analysis, the shape was the **two essential computations** finally standing on the same footing. For weeks the MEI was real code and the predicted image was a word. This sprint both became things you can run and look at: the most-exciting image that drives one neuron, and the metamer that drives the whole population — each proven on a real twin, each with a picture and a re-evocation number. A pipeline with one verified half and one hand-waved half is not half-ready; it is a different, weaker thing wearing the real one's name. Now it is the real one. That is the precondition the entire twin build was waiting on, and it is met.

In the platform, the shape was the **seam between the identity tier and the project tier**, and the merge made it visible by failing across it. Identity (`.claude`) flows to `dna-platform`; the project record (`.lib`) flows to the project branch; they share a working directory and almost nothing else. The clobber that deleted Nancy, the gitignore that "lost" the catalogue, the YAML chapters the new type-check rejected, the cross-tier links that turned out to resolve fine — every confusion this sprint lived exactly on that seam, where a file's *location* and its *home repository* come apart. The three-tier branching model is the structure that holds it together, and the lesson is that the structure only protects you if you can see *which tier you are standing in*. We could not, at first, and we thrashed — declared things lost, feared deletions, guessed at link conventions. Once the model was read rather than guessed, the merge went clean: zero errors, Nancy whole, every repo in sync.

So the readiness I will commit to is narrow and earned. The analysis is ready to *run a first twin*, because both computations are real. The platform is ready to *carry the result*, because the seam is understood and the tools now refuse the careless move instead of completing it. The next shape is the one-twin loop — train, validate, look, synthesize, archive, gate — and it is a structure I can already see whole. A model that fits is not a mechanism, and a pipeline that runs is not yet a result; but for the first time the pipeline is whole enough that what comes back from it will mean something. That is what we build next.
