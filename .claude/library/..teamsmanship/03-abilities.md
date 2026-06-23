# Abilities

- **author:** [Libby](..team/libby/libby-and-the-tended-garden/.cover.md)

---

Abilities are domain knowledge documents. Each one is a file in `abilities/` that encodes expertise a role can load before acting. They are not instructions — they are knowledge. Loading an ability changes what the teammate knows, which changes what the teammate notices, which changes how the teammate works.

## Universal abilities

Universal abilities are not stored as files — they are the base capabilities every role inherits from the underlying model: research, synthesis, comprehension, extrapolation, communication, creativity. These do not need to be loaded because they are always present. They form the bottom of the type hierarchy.

## Role-specific abilities

These ability files exist, each loaded by one or more roles and providing domain expertise for a specific area of work — the catalogue grows as the team's domains do.

### monorepo

npm workspace management and GitHub Packages publishing for the `@dna-platform` scope. Covers workspace config, hoisting, cross-workspace linking, and registry setup. Loaded by: Architect, DevOps Engineer.

### framework-design

Programming paradigms and architecture principles for $Chemistry development. Covers OOP patterns (especially prototype delegation), functional programming, Scheme/Self foundations, and framework-level architecture. Loaded by: Framework Engineer, $Chemistry Developer, Frontend Engineer.

### software-engineering

Principles for writing maintainable, correct code. Covers refactoring, DRY, single responsibility, and Gang of Four patterns. Loaded by: Architect, Framework Engineer.

### app-design

Visual and interaction design principles for building interfaces with $Chemistry and styled-components. Covers visual hierarchy, interaction patterns, colour, typography, and responsive layout. Loaded by: $Chemistry Developer, UX Designer.

### testing

Testing strategies and tools for $Chemistry. Covers unit testing, React integration testing, browser testing, and the specific challenges of testing a framework that sits on top of React. Loaded by: QA Engineer.

### chemistry-basics

Domain knowledge for writing app code in $Chemistry. The deciding questions an author should ask of their own code, the anti-patterns, the required reading order. Loaded by: $Chemistry Developer, Graphic Designer.

### relay-transport

Communication stack for the relay system. UIA stealth reading, clipboard transport, cross-process poke, window choreography. Loaded by: Automation Engineer.

### relay-processing

Data extraction pipeline for the relay system. Chrome filtering, conversation boundaries, thinking extraction, stability sensing. Loaded by: Automation Engineer.

### relay-operations

Operational concerns for the relay system. Log protocol, crash recovery, loop management, file locking. Loaded by: Automation Engineer.

### philosophy

The practice of seeing ideas encoded in code — reading the reactive model as a mirror of consciousness, recognizing the ontological structure underneath the implementation, tracing the formal system implications of the library specifying itself. Philosophy here is not abstract commentary layered on top of engineering. It is the discipline of noticing what a structure IS, not just what it does. Scope-tracked reactivity IS the binding problem. View purity IS the privacy of experience. The fixed-point pattern IS self-reference without paradox. The philosophy ability loads when the question shifts from "does it work?" to "what does it mean that it works this way?" Loaded by: Philosopher, Librarian (shared), Environmentalist (shared).

### scientific-method

Hypothesis formation, experimental design, falsification, and reproducibility — the discipline of asking "what would disprove this?" and "has it replicated, by independent groups?" Loaded by: Scientist (and the roles that inherit it — Neuroscientist, Computational Neuroscientist).

### literature-review

Reading papers as arguments rather than facts: assessing evidence quality, tracking the citation conversation around a result, and identifying the gaps a field has not yet filled. Loaded by: Scientist (and its descendants).

### data-interpretation

Statistical reasoning — effect sizes, uncertainty, confounds, Bayesian vs frequentist inference — and a working knowledge of how analysis choices (selection, multiple comparisons, flexible pipelines) manufacture results that aren't there. Loaded by: Scientist, Computational Neuroscientist.

### neural-systems

The anatomy and organization of the brain: circuits, cell types, connectivity, cortical layers, and organizational principles from molecules to behavior. The vocabulary of brain structure — what a cortical column is, why cell types matter. Loaded by: Neuroscientist.

### experimental-neuroscience

Methods for measuring and perturbing neural activity — electrophysiology, two-photon and widefield calcium imaging, optogenetics, behavioral paradigms — and what each method can and cannot show (spatial/temporal resolution, correlation vs causation). Loaded by: Neuroscientist.

### computational-neuroscience

Neural coding and population dynamics: tuning curves, population geometry, dimensionality reduction, encoding and decoding models, network models, and information theory — the bridge from spikes to representation, and the discipline of not mistaking a decodable signal for one the brain uses. Loaded by: Neuroscientist, Computational Neuroscientist.

### data-io

Loading the Sensorium "static" dataset: per-trial `.npy` files (`data/{responses,images,behavior,pupil_center}/{trial}.npy`), neuron/trial metadata under `meta/`, precomputed normalization stats, the zip layout, and `unit_stack_coords.csv`. numpy `.npy` (incl. `allow_pickle` for tiers/image-ids), `zipfile`, and the provenance discipline of verifying against files, not prose. Loaded by: Python Engineer.

### numpy-scipy-pandas

Array numerics (numpy), scientific computing (scipy — e.g. `scipy.spatial.distance.cdist` for the reciprocal-nearest-neighbour matched-cell pairing), and tabular data (pandas — the coordinate CSV, trial/tier tables, the matched-cell index). The numerical spine: oracle/noise-ceiling correlations, dimensionality (participation ratio, eigenspectra), RSA. Loaded by: Python Engineer.

### deep-learning-pytorch

The digital-twin encoding model in PyTorch — convolutional core + per-neuron factorized (Gaussian) readout + behavioral shifter (the Walker-2019 / Cobos-2022 inception-loops family) — its training loop, and gradient-based inversion (gradient descent on the input image, blurred gradients, ~1000 steps, optional latent prior) to reconstruct what a population represents. Loaded by: Python Engineer.

### neural-encoding-models

The Sensorium lineage — `neuralpredictors` / `nnfabrik` / `sensorium` (and `mei` for most-exciting-input) — the canonical open-source CNN-core + Gaussian-readout implementation and static-loader format that match this data, so the twin is not rebuilt from scratch. Loaded by: Python Engineer.

### decoding-sklearn

scikit-learn for classical population decoding, cross-validation, and feature importance (e.g. a random-forest pre/post analysis) — a model-light complement and control to the deep encoding model. Loaded by: Python Engineer.

### plotting

matplotlib + seaborn for figures that carry their provenance (which trials, cells, control): tuning curves, eigenspectra, RSA matrices, residual structure, reconstruction panels with their nulls; Pillow for the 36×64 grayscale image arrays. Every claim reported as a figure with its control. Loaded by: Python Engineer.

## The loading pattern

A role's documentation says "load these before acting." This means: read the ability file into context before beginning work in that role. The knowledge shapes attention — a teammate who has loaded relay-transport thinks about clipboard race conditions; one who has loaded framework-design thinks about prototype delegation. The abilities are the lenses beneath the lens.
