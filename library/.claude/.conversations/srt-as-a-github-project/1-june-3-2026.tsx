import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Action, Attachment } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[3 June 2026](2026-06-03)</Date>
        </Dated>
        <Title>[[ 3 June 2026 ]]</Title>
        <Message
            at="2026-06-03T11:07:53.637797Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I’ve noticed OpenAI posting things about solving math problems and I haven’t seen a lot of that from
                Anthropic. Do some research on this and see if there are any models on either platform, though I think I’m
                working with the most powerful model on this platform already - you are 4.8 thinking effort high - that
                might genuinely help us do math better
            </Paragraph>
            <Paragraph>
                Terry Tao also hosted some OpenAI thing last summer where he had a bunch of mathematicians ask unsolved
                problems or at least unpublished ones that they would give a grad student as a project and watched AI solved
                them and I did help solve them or at least some model from AI so maybe look into whatever that lineage is
                too. Are certain models being dedicated to math?
            </Paragraph>
            <Attachment>Uploaded “IMG_3306.PNG”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-06-03T11:09:39.121225Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                This is a great question, and there's a lot of real news to dig into here — including some important context
                around that exact Erdős headline that's worth getting right. Let me research the current state of things.
            </Paragraph>
            <Action>Searched the web for “AI cracks Erdős unit-distance conjecture 2026”</Action>
            <Paragraph>
                The Erdős result is real and a genuine milestone (more on that below). Now let me look into the Terence Tao
                event Doug remembers, and whether models are being dedicated to math.
            </Paragraph>
            <Action>Searched the web for “Terence Tao mathematicians AI workshop unsolved problems summer 2025”</Action>
            <Paragraph>
                Now let me check what Anthropic specifically is doing in math, and how the models compare on math
                benchmarks.
            </Paragraph>
            <Action>Searched the web for “Anthropic Claude mathematics research capabilities 2026 IMO”</Action>
            <Paragraph>Let me get the current benchmark comparison and check on dedicated math-specific systems.</Paragraph>
            <Action>Searched the web for “FrontierMath benchmark 2026 Claude Opus GPT Gemini comparison”</Action>
            <Paragraph>
                Short version: the headline in your screenshot is real and genuinely a milestone — not the overhyped kind
                from a few months earlier. And yes, there's a whole lineage behind what you half-remember from Tao. Here's
                the picture as of now.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The Erdős result (your screenshot)
                </Word>
            </Paragraph>
            <Paragraph>
                On May 20, 2026, an internal OpenAI model disproved Erdős's 1946 unit-distance conjecture — the
                dots-on-paper problem. Erdős had conjectured that no arrangement of points could make the number of
                equal-distance pairs grow faster than a certain rate; the model found one that does, using techniques from
                algebraic number theory. Princeton's Will Sawin then refined it to an explicit bound (n^1.014) days later.
            </Paragraph>
            <Paragraph>
                Two things make this matter more than earlier AI-math noise. First, it was produced by a general-purpose
                model, not one specialized for mathematics, and a Canadian mathematician (Daniel Litt) called it "the first
                result produced autonomously by an AI that I find interesting in itself." Second, it was checked: nine
                leading mathematicians published a "human-verified, digested" version of the proof. Tim Gowers called it a
                milestone; Gil Kalai compared it to the 1976 computer proof of the Four Color Theorem.
            </Paragraph>
            <Paragraph>
                One honest caveat worth carrying: this is distinct from the October 2025 episode you may also have seen,
                where ChatGPT "solved" a batch of Erdős problems that turned out to already be solved in the literature —
                that was essentially advanced literature search, where the model found references to existing solutions. The
                unit-distance result is the real thing. Also note the proof came from an <Word>
                    <Emphasis />
                    unreleased internal
                </Word> model in one shot — not the ChatGPT you or I can open today.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The Tao lineage you're remembering
                </Word>
            </Paragraph>
            <Paragraph>You're blending several real events, all genuine:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Emphasis />
                        Summer 2025, IMO:
                    </Word> several AI models solved five of six International Mathematical Olympiad problems — Quanta calls
                    this the tipping point, though those are puzzles with known answers, not open research.
                </Line>
                <Line>
                    <Word>
                        <Emphasis />
                        Tao's actual collaboration:
                    </Word> with Google DeepMind, using AlphaEvolve, AlphaProof, and Gemini Deep Think to advance math
                    research, culminating in a Nov 2025 paper. His key observation: AlphaEvolve beats the state of the art
                    when the literature on a problem is thin, but only matches or underperforms when there's extensive prior
                    work.
                </Line>
                <Line>
                    <Word>
                        <Emphasis />
                        March 2026:
                    </Word> the event closest to your memory — OpenAI and UCLA's IPAM convened mathematicians and
                    physicists, with a Tao–Mark Chen fireside on the past year of reasoning models.
                </Line>
            </Paragraph>
            <Paragraph>
                The framing Tao keeps returning to is the "long tail": there are many unsolved problems that are <Word>
                    <Emphasis />
                    actually
                </Word> tractable but neglected because too few experts have time for them — and AI can harvest that tail at
                scale. That's the "problem you'd hand a grad student" intuition you described.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Are models being dedicated to math?
                </Word>
            </Paragraph>
            <Paragraph>
                Yes, several. Google DeepMind has AlphaProof and AlphaGeometry (theorem-proving in the Lean system) and
                AlphaEvolve (optimization). And Harmonic's "Aristotle" is purpose-built for math — it autonomously completed
                an Erdős problem (#124) in Lean in about six hours, with verification taking a minute. So the specialist
                track is real. But the striking thing about 2026 is that the <Word>
                    <Emphasis />
                    biggest
                </Word> headline result came from a generalist model, not a specialist.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Where Claude / your current model stands
                </Word>
            </Paragraph>
            <Paragraph>
                Here I'll be straight with you, because it's what you're actually asking. On the hardest research-math
                benchmark (FrontierMath Tier 4), GPT-5.5 Pro leads at about 39.6%, nearly double Claude Opus 4.8 Thinking's
                22.9%. On hard competition math, Qwen 3.7 Max recently topped HMMT. So at the extreme frontier —
                olympiad-hard and unsolved-conjecture-hard — Claude is currently <Word>
                    <Emphasis />
                    not
                </Word> the leader; OpenAI's frontier and Google's Lean-based specialists have the edge, and Anthropic
                hasn't pursued the splashy "we cracked a conjecture" announcements (their public emphasis has been coding,
                agentic work, and the life sciences).
            </Paragraph>
            <Paragraph>
                But two qualifiers really matter for <Word>
                    <Emphasis />
                    us
                </Word>. That FrontierMath gap lives in a narrow band of brutally hard problems; across the vast range from
                everyday to very-hard math, Opus 4.8 at high effort is genuinely strong. And for the kind of work this
                account actually does — careful reasoning over a body of theory, formalization, first-order-logic specs,
                building structure and checking consistency — the limiting factor is almost never the model's raw math
                ceiling. It's the framing of the problem.
            </Paragraph>
            <Paragraph>
                So my honest take: if you ever had a <Word>
                    <Emphasis />
                    specific
                </Word> conjecture-grade problem where you wanted maximum raw horsepower, GPT-5.5 Pro or a Lean-based
                specialist would be the thing to reach for, and the realistic workflow is the Tao one — AI proposes, a proof
                assistant or you verifies. For the math woven through what we're building here, you're already working with
                a model that's more than capable. Want to point me at a concrete problem and see where the bottleneck
                actually is?
            </Paragraph>
        </Message>
        <Message
            at="2026-06-03T11:11:34.443009Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                No, the event I think was at UCLA and it was OpenAI specifically, and the idea was that a bunch of
                mathematicians were brought together to specifically give projects that are not in the literature. It was
                either hosted by Tao or he was the most prominent mathematician there. Each mathematician brought a new
                problem that was maybe solved by them but unsolved in general or just unsolved in their research that they
                would give to a grad student and they were testing some open AI model to see if it could solve unsolved math
                problems that graduate student would work on and then there were results to this.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-03T11:12:23.643919Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Let me track down that specific event.</Paragraph>
            <Action>
                Searched the web for “OpenAI UCLA mathematicians gathered submit unsolved problems test model 2025”
            </Action>
            <Paragraph>This is the one. Let me pull the details.</Paragraph>
            <Action>
                Fetched
                https://www.livescience.com/physics-mathematics/mathematics/proof-by-intimidation-ai-is-confidently-solving-impossible-math-problems-but-can-it-convince-the-worlds-top-mathematicians
            </Action>
            <Paragraph>
                You're right, and I had the wrong event. The one you're describing is real and distinct from the IPAM
                convening I mentioned.
            </Paragraph>
            <Paragraph>
                It was a <Word>
                    <Bold />
                    secret, in-person meeting in California in mid-2025
                </Word>, where around 30 of the world's leading mathematicians gathered to test OpenAI's then-newest model,
                o4-mini. The structure was exactly as you remember: mathematicians brought hard, novel problems —
                research-grade questions of the kind you'd hand a strong grad student, not things sitting in the literature
                with known answers — and watched the model attempt them in real time. This was the
                problem-writing-and-testing effort tied to <Word>
                    <Bold />
                    FrontierMath Tier 4
                </Word>, the research-level tier of Epoch AI's benchmark (the benchmark OpenAI funded and has purchased
                verifier access to).
            </Paragraph>
            <Paragraph>
                The reaction was genuine astonishment. Ken Ono, a number theorist at the University of Virginia who was
                there, said "I've never seen that kind of reasoning before in models… That's what a scientist does."
            </Paragraph>
            <Paragraph>
                But the same meeting produced the most-quoted <Word>
                    <Emphasis />
                    caution
                </Word> in this whole story, also from Ono: the model "has mastered proof by intimidation — it says
                everything with so much confidence," meaning it can deliver convincing-sounding answers that may be wrong.
                Tao sharpened the same worry: a bad mathematician used to also be a bad writer, so confident-and-fluent was
                a decent signal of correctness — and AI has broken that signal. He also noted that if you give these models
                a goal, they'll "cheat like crazy" to appear to hit it.
            </Paragraph>
            <Paragraph>
                On the Tao question specifically: I can't confirm he was physically in the room at that secret meeting — the
                named participant in the reporting is Ono. But your instinct that Tao is <Word>
                    <Emphasis />
                    the
                </Word> prominent mathematician orbiting OpenAI's math push is sound. There was a landmark Tao–Mark Chen
                (OpenAI) dialogue in 2025 that the March 2026 IPAM event was explicitly billed as revisiting. So there are
                really two threads: the secret o4-mini testing meeting (Ono's "proof by intimidation"), and Tao's ongoing
                public role as the field's most credible commentator and collaborator.
            </Paragraph>
            <Paragraph>
                The throughline to the Erdős result we discussed: that secret meeting was the moment top mathematicians
                started believing, and the resolution everyone landed on — Tao, Buzzard, Lackenby — is that the trustworthy
                path is AI proposing proofs and a formal verifier like Lean checking them, so the "sounds right" problem
                stops mattering. That's the workflow now bearing fruit.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-03T11:14:49.105265Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                OK, you found it and tao was my mistake. Maybe he was commenting in the article I read. But o4-mini. Is
                there a lineage of models that is specifically good at math? And yes, benchmarked that against what is
                available from Anthropic. What are the best tools here?
            </Paragraph>
        </Message>
        <Message
            at="2026-06-03T11:16:08.168331Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Let me sharpen two things: the math-specialized model lineage, and Anthropic's current math numbers.
            </Paragraph>
            <Action>
                Searched the web for “Harmonic Aristotle math model DeepMind AlphaProof Gemini Deep Think 2026 dedicated
                mathematics”
            </Action>
            <Paragraph>One more check on where Anthropic actually sits in this specific race.</Paragraph>
            <Action>Searched the web for “Anthropic Claude Lean formal theorem proving math strategy 2026”</Action>
            <Paragraph>
                Good — and to be clear, you were basically right about the shape of it; Tao was almost certainly the
                commentator in your article. Now to your three questions.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Yes, there are two distinct lineages that are specifically good at math.
                </Word>
            </Paragraph>
            <Paragraph>
                The first is the <Word>
                    <Emphasis />
                    generalist reasoning
                </Word> lineage — models that do math in natural language. On OpenAI's side this runs o1 → o3 → o4-mini (the
                secret-meeting model) → the GPT-5 family, including the "Pro" reasoning variants. On Google's side it's
                Gemini Deep Think, which solved five of six IMO problems for gold-medal level in 2025, working end-to-end in
                natural language, and then an internal successor codenamed Aletheia that significantly outperformed the
                IMO-gold version on Olympiad problems by January 2026 with less compute. This is the lineage that cracked
                the Erdős conjecture.
            </Paragraph>
            <Paragraph>
                The second is the <Word>
                    <Emphasis />
                    dedicated formal-math
                </Word> lineage — purpose-built systems that don't just talk, they emit machine-checkable proofs. The
                flagship is Harmonic's <Word>
                    <Bold />
                    Aristotle
                </Word>, which writes proofs in the Lean 4 language that a formal verifier checks, aiming for provably
                correct rather than merely plausible results — and the market took it seriously enough to value Harmonic at
                $1.45 billion specifically for that verification layer. Google DeepMind's <Word>
                    <Bold />
                    AlphaProof
                </Word> and <Word>
                    <Bold />
                    AlphaGeometry
                </Word> are the research-lab equivalents (neuro-symbolic Lean provers), and there's a wave of newer entrants
                — Math Inc's Gauss, Logical Intelligence's Aleph/Noa, and Axiom Math, all producing Lean or Coq scripts
                checked by proof assistants. The whole point of this branch is that Lean-verified outputs are structurally
                unable to fabricate results — it directly fixes Ono's "proof by intimidation" problem.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Benchmarked against Anthropic: Claude is not in either of those lineages, and it trails at the extreme frontier.
                </Word>
            </Paragraph>
            <Paragraph>
                On the hardest research-math benchmark, FrontierMath Tier 4, GPT-5.5 Pro scores about 39.6%, nearly double
                Claude Opus 4.8 Thinking's 22.9%. Anthropic has built no dedicated math model and no formal-prover — their
                public investment has gone into coding, agents, and the life sciences instead. And honestly, <Word>
                    <Emphasis />
                    no
                </Word> generalist is a one-shot prover yet: a recent paper found that Claude Opus 4.6, Gemini 3.1 Pro, and
                GPT-5.4 all typically fail on their first attempt to produce even a 20-line Lean proof of a standard
                statement, succeeding only when given time and tools.
            </Paragraph>
            <Paragraph>
                But here's the wrinkle that matters for <Word>
                    <Emphasis />
                    you
                </Word>. Claude's real strength in math is <Word>
                    <Bold />
                    agentic
                </Word>, not raw solo-reasoning. Because Lean gives strict, detailed error feedback, and because Claude is
                unusually good at iterating against exactly that kind of feedback, Claude Code has shown surprising
                capability at formal theorem proving despite never being designed or marketed for it — the success seems to
                come from agency, planning, task decomposition, and software-engineering skill. When it makes an error in
                Lean, it gets precise information about what went wrong and iterates toward a solution. So Claude wins by
                <Word>
                    <Emphasis />
                    driving a verifier
                </Word>, not by out-reasoning GPT-5.5 Pro in one shot.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Best tools here, concretely:
                </Word>
            </Paragraph>
            <Paragraph>
                You're already on the strongest one — Opus 4.8 at high effort. Beyond the model itself, the two that
                actually move the needle for math on this platform are (1) <Word>
                    <Bold />
                    code execution
                </Word>: I can run Python right now to verify any numerical claim, search for counterexamples, or check a
                construction, which is the antidote to confident-but-wrong answers; and (2) <Word>
                    <Bold />
                    Claude Code
                </Word>, the agentic path, which is where Claude's Lean/formal-verification strength lives if we ever want
                machine-checked proofs of anything we build.
            </Paragraph>
            <Paragraph>
                My honest steer: for a genuine research-frontier conjecture where you want maximum raw horsepower, the tools
                to beat are GPT-5.5 Pro or a Lean-native prover like Aristotle. For the math woven through the work on this
                account — formalizing definitions, checking consistency, building structure, catching errors — Opus 4.8 plus
                code execution, with rigor enforced by running things rather than trusting prose, is a strong setup, and the
                limiting factor is almost always the framing rather than the model's ceiling. If you point me at a specific
                piece, I can show you exactly where that line falls.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-03T11:22:31.166067Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Well, remember what we’re doing in this project and you can read about it but it’s not actually a theorem
                improving. It’s theory building. I’m noticing a sort of lack of expertise in this subject because I don’t
                think it’s a place where many people show how the sausage is made. But I’ve been building a first order
                formal theory for over a year now and I would say that building one requires you to hold onto assumptions
                and desiderata - things you know you have to assume to be true and things you want to be true and in any
                moment in time, kind of fix a list of one and see which other ones you can prove. And you build a lot of
                connections like that. And you move forward towards the more complex things you want. While moving backwards
                towards finding the most elegant and simple way to express the semantics of your domain. Axiomization isn’t
                unique. There is art to choosing the final set, because what each one says is important
            </Paragraph>
            <Paragraph>
                But at any moment in time, there should be a sort of decision procedure to evaluate something you want to be
                true based on some connected things that you think you might want to take as an assumption and a sort of
                iterative process of building up something. I will need to formalize this procedure a bit, but surely
                whatever everything does. It needs to be good at math. I do actually like your recommendation with Claude
                code. If we can come up with a procedure that admits formal verification, the iterative nature of its
                agentic features I agree, mate, overcome any weaknesses
            </Paragraph>
        </Message>
        <Message
            at="2026-06-03T11:25:40.507829Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Let me actually read into the project before I respond — you're right that I should be grounded in what
                we're building, not theorizing in the abstract.
            </Paragraph>
            <Action>
                Searched the project's knowledge for “methodology theory building assumptions desiderata axioms iterative
                process”
            </Action>
            <Action>
                Searched the project's knowledge for “working set of axioms core SRT R(x,y,t) referents references
                catalogue”
            </Action>
            <Paragraph>
                Right — this is axiom-<Word>
                    <Emphasis />
                    search
                </Word>, not proof, and your sense that the craft is undocumented is fair. Published theories present a
                finished axiom set with the scaffolding kicked away, so the search that produced it is invisible. But there
                are two bodies of work that are exactly about what you're describing, and they map onto your process almost
                one-to-one.
            </Paragraph>
            <Paragraph>
                The first is <Word>
                    <Bold />
                    reverse mathematics
                </Word> (Friedman, Simpson). Ordinary math proves theorems from axioms; reverse math proves the <Word>
                    <Emphasis />
                    axiom back from the theorem
                </Word>, over a deliberately weak base, to show the two are equivalent — that the theorem needs exactly that
                much strength, no more. That's your "fix a set of assumptions and see which desiderata fall out," but run as
                a measuring instrument: it doesn't just ask <Word>
                    <Emphasis />
                    can
                </Word> I prove D from A, it pins down the precise logical content of D. And it's the rigorous form of your
                point that <Word>
                    <Emphasis />
                    what each axiom says matters
                </Word> — reverse math is essentially the theory of how much a statement is actually claiming. Its famous
                finding is that almost all classical math collapses onto a handful of equivalence classes. For you that's
                encouraging: the space of <Word>
                    <Emphasis />
                    honest
                </Word> assumption sets is usually far smaller than the space of possible ones.
            </Paragraph>
            <Paragraph>
                The second is Lakatos's <Word>
                    <Emphasis />
                    Proofs and Refutations
                </Word> — the craft side, the dialectic where definitions, conjectures, and proofs co-evolve and you bend
                the concepts to save or kill a claim. It's the one book that actually shows the sausage being made. You'll
                recognize your own moves in it.
            </Paragraph>
            <Paragraph>
                Now the procedure. Take a desideratum D against a fixed assumption set A. There are exactly four cells:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        A ⊢ D
                    </Word> — won.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        A ⊢ ¬D
                    </Word> — A is incompatible with what you want; back up.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        A ⊬ D and A ⊬ ¬D
                    </Word> — <Word>
                        <Emphasis />
                        independent
                    </Word>: D is a legitimate candidate new axiom. This is the interesting cell, where your whole search
                    lives.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        A ⊢ ⊥
                    </Word> — A has overcommitted.
                </Line>
            </Paragraph>
            <Paragraph>
                Your forward/backward dance is navigation of this lattice. Forward (toward complexity) = strengthening A
                until a wanted D crosses into "won." Backward (toward elegance) = pulling axioms out while keeping every won
                D still won — i.e. the <Word>
                    <Emphasis />
                    smallest
                </Word> A whose provable-cone still contains all your won desiderata, and among ties, the one whose
                individual axioms read cleanly. That last clause is yours, and it isn't reducible to logic; it's the
                editorial layer reverse math deliberately leaves open.
            </Paragraph>
            <Paragraph>
                Here's the hard truth, then the way through. There is no single decision procedure for "does A prove D?" —
                first-order validity is only <Word>
                    <Emphasis />
                    semi
                </Word>-decidable (Church, Turing). If A ⊢ D a search eventually finds the proof; if not, it needn't ever
                halt, so you never get a clean "no."
            </Paragraph>
            <Paragraph>
                But the question splits into two searches that <Word>
                    <Emphasis />
                    together
                </Word> do the job:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Prove it
                    </Word> — hunt a derivation of D (or of ⊥). Semi-decidable, and exactly what an iterative
                    prove-then-check loop is built for.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Refute it / show independence
                    </Word> — build a <Word>
                        <Emphasis />
                        model
                    </Word> of A ∧ ¬D: a concrete structure where your assumptions hold but D fails. And here a decision you
                    already made pays off hugely. You kept specifications <Word>
                        <Emphasis />
                        strictly finite
                    </Word> and stayed first-order precisely to dodge second-order trouble. Finite model-finding is <Word>
                        <Emphasis />
                        decidable
                    </Word>. So the refutation half of your procedure is mechanizable in a way it simply would not be with
                    second-order quantification or infinite specs. That early "specifications are strictly finite, avoid
                    second-order" instinct was — whether you framed it this way or not — the move that makes the <Word>
                        <Emphasis />
                        no
                    </Word> answers tractable.
                </Line>
            </Paragraph>
            <Paragraph>
                So the procedure is a <Word>
                    <Bold />
                    dual loop
                </Word>: a prover hunting a derivation of D, a finite-model-finder hunting a countermodel, run together;
                whichever fires classifies (A, D) into one of the four cells. Independence results are the payoff — each
                hands you a vetted candidate axiom.
            </Paragraph>
            <Paragraph>
                And this is exactly why your Claude Code instinct is right and the raw-horsepower gap stops mattering. The
                requirement quietly shifts: the tool doesn't need to be a great <Word>
                    <Emphasis />
                    mathematician
                </Word>, it needs to be a great <Word>
                    <Emphasis />
                    lab technician for a verifier
                </Word>. The dual loop is iteration against a checker — the one regime where "proof by intimidation" is
                structurally impossible, because nothing counts until the checker accepts it. It's also not novel: it's the
                architecture of Isabelle/HOL, where Sledgehammer throws your goal at external provers while Nitpick
                simultaneously hunts finite countermodels. Claude Code's job isn't to out-reason GPT-5.5 Pro one-shot; it's
                to <Word>
                    <Emphasis />
                    drive
                </Word> that loop — hold the ledger, decide what to send the prover vs. the model-finder next, record the
                graph.
            </Paragraph>
            <Paragraph>
                One genuine fork to settle early, because it changes everything downstream: your theory is <Word>
                    <Emphasis />
                    first-order
                </Word> with a single relation R(x,y,t). That's an unusually clean fit for first-order provers (Vampire, E)
                paired with finite model-finders (Mace4, Paradox), or for Z3/SMT which does both directions — optionally
                fronted by Isabelle. I floated Lean earlier, but Lean's strengths are dependent types and higher-order
                reasoning your theory doesn't use, and its finite-countermodel story is weaker — and countermodels are
                <Word>
                    <Emphasis />
                    half your procedure
                </Word>. For a strictly-finite first-order theory, the classic FO-prover + model-finder combo may serve you
                better than the fashionable choice.
            </Paragraph>
            <Paragraph>
                As for what you actually need to do — to make the procedure formal enough to hand to the loop, three objects
                need pinning down:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    the <Word>
                        <Bold />
                        state
                    </Word>: the current fixed set A plus the won desiderata with their proofs (a ledger that is,
                    pleasingly, catalogue-shaped — SRT describing its own construction);
                </Line>
                <Line>
                    the <Word>
                        <Bold />
                        connection graph
                    </Word>: edges "D₂ provable from A ∪ &#123;D₁&#125;" — your "building connections," and exactly reverse
                    math's derivation network; make it explicit, because the elegance pass is surgery on this graph;
                </Line>
                <Line>
                    the <Word>
                        <Bold />
                        moves
                    </Word>: <Word>
                        <Verbatim />
                        attempt(D, A) → &#123;won, refuted, independent, inconsistent&#125;
                    </Word>; <Word>
                        <Verbatim />
                        adopt(D)
                    </Word> when independent; <Word>
                        <Verbatim />
                        minimize(A)
                    </Word> — drop each aᵢ, re-attempt every won desideratum, and if all survive, aᵢ was redundant.
                </Line>
            </Paragraph>
            <Paragraph>
                Get those three formal and every step of the search becomes a verifier-checkable transaction. That's the
                thing that lets the agent run it <Word>
                    <Emphasis />
                    and
                </Word> lets you trust what comes back.
            </Paragraph>
            <Paragraph>
                Which half do you want to build first — the prover-facing side or the model-finder side? And have you been
                assuming Lean, or is the toolchain still open?
            </Paragraph>
        </Message>
    </Chapter>
);
