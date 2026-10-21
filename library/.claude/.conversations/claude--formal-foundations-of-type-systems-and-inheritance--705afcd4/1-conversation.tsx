import { Bold, Chapter, Emphasis, Heading, Line, List, Paragraph, Table, Title, Word } from '@dna-platform/public';
import { CodeBox, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-02-08T14:16:07.870310Z"
        >
            <Origin>019c3d9c-5c5c-7a19-a980-043497a099fc</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Try to find and then teach me a minimum formalism to express the idea of a type system and inheritance. What
                is the formalism that the typescript or haskell compiler team might use as a formalism to prove their
                compiler is sound
            </Paragraph>
        </Message>
        <Message
            at="2026-02-08T14:16:55.156351Z"
        >
            <Origin>019c3d9c-5c5c-7cce-a5de-5e640be0995e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Heading>The Formal Foundations of Type Systems</Heading>
            <Heading>The Starting Point: Typed Lambda Calculus</Heading>
            <Paragraph>
                The minimum formalism is surprisingly small. Everything starts with the <Word>
                    <Bold />
                    simply-typed lambda calculus
                </Word> (STLC, or λ→), which you can write on an index card:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Syntax (terms):
                </Word>
            </Paragraph>
            <CodeBox>
                {`e ::= x            -- variable
    | λx:τ. e      -- abstraction (function)
    | e₁ e₂        -- application (call)`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Syntax (types):
                </Word>
            </Paragraph>
            <CodeBox>
                {`τ ::= B            -- base type (Int, Bool, etc.)
    | τ₁ → τ₂      -- function type`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Typing judgments
                </Word> take the form <Word>
                    <Verbatim />
                    Γ ⊢ e : τ
                </Word>, read as "under context Γ, expression e has type τ." The context Γ is just a list of variable-type
                bindings like <Word>
                    <Verbatim />
                    x:Int, y:Bool
                </Word>.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Typing rules
                </Word> (the entire system is just three rules):
            </Paragraph>
            <CodeBox>
                {`  x:τ ∈ Γ
────────────── (Var)
  Γ ⊢ x : τ


  Γ, x:τ₁ ⊢ e : τ₂
─────────────────────── (Abs)
  Γ ⊢ (λx:τ₁. e) : τ₁ → τ₂


  Γ ⊢ e₁ : τ₁ → τ₂    Γ ⊢ e₂ : τ₁
──────────────────────────────────────── (App)
  Γ ⊢ e₁ e₂ : τ₂`}
            </CodeBox>
            <Paragraph>
                That's it. That's the kernel from which Haskell's and TypeScript's type systems are both grown. Each rule
                reads top-to-bottom as "if the stuff above the line holds, then the stuff below the line holds."
            </Paragraph>
            <Heading>Soundness: Progress and Preservation</Heading>
            <Paragraph>
                The standard technique for proving a type system is <Word>
                    <Bold />
                    sound
                </Word> (i.e., "well-typed programs don't go wrong") is the <Word>
                    <Bold />
                    Wright-Felleisen
                </Word> method (1994). You prove exactly two theorems:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Preservation (aka Subject Reduction):
                </Word> If <Word>
                    <Verbatim />
                    Γ ⊢ e : τ
                </Word> and <Word>
                    <Verbatim />
                    e → e'
                </Word> (e steps to e'), then <Word>
                    <Verbatim />
                    Γ ⊢ e' : τ
                </Word>. Types are preserved through evaluation.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Progress:
                </Word> If <Word>
                    <Verbatim />
                    ∅ ⊢ e : τ
                </Word> (e is well-typed in the empty context), then either e is a value, or there exists some e' such that
                <Word>
                    <Verbatim />
                    e → e'
                </Word>. Well-typed closed terms don't get stuck.
            </Paragraph>
            <Paragraph>
                Together these give you: a well-typed program either produces a value or runs forever — it never reaches a
                nonsensical stuck state. This is what "sound" means.
            </Paragraph>
            <Heading>Adding Subtyping (Inheritance): System F-sub</Heading>
            <Paragraph>
                To model inheritance/subtyping, you add a <Word>
                    <Bold />
                    subtyping relation
                </Word> <Word>
                    <Verbatim />
                    τ₁ &lt;: τ₂
                </Word> ("τ₁ is a subtype of τ₂") and one critical new typing rule:
            </Paragraph>
            <CodeBox>
                {`  Γ ⊢ e : τ₁    τ₁ <: τ₂
────────────────────────────── (Sub)
  Γ ⊢ e : τ₂`}
            </CodeBox>
            <Paragraph>
                This is the <Word>
                    <Bold />
                    subsumption
                </Word> rule: if something has type <Word>
                    <Verbatim />
                    τ₁
                </Word> and <Word>
                    <Verbatim />
                    τ₁
                </Word> is a subtype of <Word>
                    <Verbatim />
                    τ₂
                </Word>, then it also has type <Word>
                    <Verbatim />
                    τ₂
                </Word>. This single rule is the formal heart of all inheritance.
            </Paragraph>
            <Paragraph>
                The subtyping rules for function types give you the famous <Word>
                    <Bold />
                    variance
                </Word> rule:
            </Paragraph>
            <CodeBox>
                {`  τ₃ <: τ₁    τ₂ <: τ₄
────────────────────────── (S-Arrow)
  τ₁ → τ₂  <:  τ₃ → τ₄`}
            </CodeBox>
            <Paragraph>
                Functions are <Word>
                    <Bold />
                    contravariant
                </Word> in their input and <Word>
                    <Bold />
                    covariant
                </Word> in their output. This is the formal reason why, for instance, <Word>
                    <Verbatim />
                    Animal → Cat
                </Word> is a subtype of <Word>
                    <Verbatim />
                    Cat → Animal
                </Word>.
            </Paragraph>
            <Paragraph>
                For <Word>
                    <Bold />
                    record types
                </Word> (which model objects/classes), you add:
            </Paragraph>
            <CodeBox>
                {`{x:Int, y:Int, z:Int} <: {x:Int, y:Int}`}
            </CodeBox>
            <Paragraph>
                A record with more fields is a subtype of one with fewer — this is <Word>
                    <Bold />
                    width subtyping
                </Word>, the formal basis of structural inheritance (which is exactly TypeScript's model).
            </Paragraph>
            <Heading>What Haskell Actually Uses: System FC</Heading>
            <Paragraph>
                Haskell's compiler (GHC) uses <Word>
                    <Bold />
                    System FC
                </Word> — System F (polymorphic lambda calculus) extended with <Word>
                    <Bold />
                    coercions
                </Word>. The key additions over the basic system:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Type variables and ∀-quantification:
                    </Word> <Word>
                        <Verbatim />
                        ∀α. τ
                    </Word> (this is System F, enabling parametric polymorphism)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Type equality coercions:
                    </Word> a term-level witness <Word>
                        <Verbatim />
                        γ : τ₁ ~ τ₂
                    </Word> that proves two types are equal
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Coercion application:
                    </Word> <Word>
                        <Verbatim />
                        e ▷ γ
                    </Word> — cast expression e using coercion γ
                </Line>
            </Paragraph>
            <Paragraph>
                This is how GHC compiles GADTs, type families, and newtypes — all complex type equalities get reduced to
                explicit coercion terms in the intermediate language. The key paper is Sulzmann, Chakravarty, Peyton Jones,
                and Donnelly (2007), "System F with Type Equality Coercions."
            </Paragraph>
            <Paragraph>
                The soundness proof for System FC still uses progress + preservation, just with a more elaborate set of
                rules.
            </Paragraph>
            <Heading>What TypeScript Deals With: Structural Subtyping + Row Types</Heading>
            <Paragraph>
                TypeScript's situation is formally messier because its type system is <Word>
                    <Bold />
                    intentionally unsound
                </Word> in several places (e.g., bivariant function parameter checking was a deliberate choice). But the
                formal model closest to what it does is:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Structural subtyping
                    </Word> on record/object types (width + depth subtyping)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Union and intersection types:
                    </Word> <Word>
                        <Verbatim />
                        τ₁ | τ₂
                    </Word> and <Word>
                        <Verbatim />
                        τ₁ &amp; τ₂
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Bounded polymorphism:
                    </Word> <Word>
                        <Verbatim />
                        &lt;T extends U&gt;
                    </Word> is formally <Word>
                        <Verbatim />
                        ∀(T &lt;: U). τ
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>
                This is essentially <Word>
                    <Bold />
                    System F-sub with unions and intersections
                </Word>, sometimes called System F∧∨&lt;:. The TypeScript team has published on this — notably the work on
                narrowing and control flow analysis sits outside classical type theory and is more ad hoc.
            </Paragraph>
            <Heading>The Minimum You Need to Hold in Your Head</Heading>
            <Paragraph>
                <Table />
                <Line>
                    <Word>Concept</Word>
                    <Word>Formalism</Word>
                </Line>
                <Line>
                    <Word>Functions + types</Word>
                    <Word>Simply-typed λ-calculus (λ→)</Word>
                </Line>
                <Line>
                    <Word>Generics/polymorphism</Word>
                    <Word>System F (λ2)</Word>
                </Line>
                <Line>
                    <Word>Inheritance/subtyping</Word>
                    <Word>System F-sub (F&lt;:)</Word>
                </Line>
                <Line>
                    <Word>Haskell's actual core</Word>
                    <Word>System FC (F with coercions)</Word>
                </Line>
                <Line>
                    <Word>Soundness proof technique</Word>
                    <Word>Progress + Preservation</Word>
                </Line>
            </Paragraph>
            <Paragraph>
                The canonical textbook is Benjamin Pierce's <Word>
                    <Emphasis />
                    Types and Programming Languages
                </Word> (TaPL). Chapters 1–15 cover everything above, and it's genuinely well-written. If you want to go
                deep on System FC specifically, the GHC wiki and the Sulzmann et al. paper are the primary sources.
            </Paragraph>
            <Paragraph>
                The beautiful thing is that the whole edifice really does rest on those three typing rules I started with —
                every extension is just adding new syntax, new types, and new rules in that same judgmental format.
            </Paragraph>
        </Message>
        <Message
            at="2026-02-08T14:43:45.774177Z"
        >
            <Origin>019c3db5-a88a-7642-be28-77ce47b298f5</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I don’t understand the syntax. Please explain each part as if you are teaching it. I don’t need hand
                holding. I need formal specification. Define the syntax formally and succinctly. The less natural language
                the better
            </Paragraph>
        </Message>
        <Message
            at="2026-02-08T14:44:06.971626Z"
        >
            <Origin>019c3db5-a88a-7f84-aa72-854610152f2c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Heading>Notation Reference</Heading>
            <Heading>Judgment Form</Heading>
            <CodeBox>
                {`Γ ⊢ e : τ`}
            </CodeBox>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        Γ
                    </Word> — typing context: a finite map from variable names to types. Example: <Word>
                        <Verbatim />
                        &#123;x: Int, y: Bool&#125;
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        ⊢
                    </Word> — "entails" / "proves"
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        e
                    </Word> — a term (expression)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        τ
                    </Word> — a type
                </Line>
                <Line>Full reading: "context Γ proves that term e has type τ"</Line>
                <Line>
                    <Word>
                        <Verbatim />
                        ∅ ⊢ e : τ
                    </Word> — e has type τ with no assumptions (closed term)
                </Line>
            </Paragraph>
            <Heading>Inference Rules</Heading>
            <CodeBox>
                {`  premise₁    premise₂
────────────────────────── (RuleName)
  conclusion`}
            </CodeBox>
            <Paragraph>
                <List />
                <Line>Above the line: conditions that must hold</Line>
                <Line>Below the line: what follows if they do</Line>
                <Line>
                    This is a <Word>
                        <Bold />
                        sequent
                    </Word>: conclusion holds iff all premises hold
                </Line>
                <Line>
                    Rules compose: a premise of one rule can be the conclusion of another — this is how you build derivation
                    trees
                </Line>
            </Paragraph>
            <Heading>Meta-variables (naming conventions)</Heading>
            <CodeBox>
                {`e, e₁, e₂    — terms (expressions)
τ, τ₁, τ₂    — types
x, y, z       — variable names
Γ, Δ          — contexts
B             — base types (Int, Bool, ...)
γ             — coercions (System FC)
α, β          — type variables (System F)`}
            </CodeBox>
            <Heading>Key Operators</Heading>
            <CodeBox>
                {`λx:τ. e       — function taking x of type τ, returning e
                 (λ is the binding operator; x is bound in e)

e₁ e₂         — apply function e₁ to argument e₂
                 (left-associative: f a b = (f a) b)

τ₁ → τ₂       — function type: takes τ₁, returns τ₂
                 (right-associative: A → B → C = A → (B → C))

∀α. τ          — universal type: τ holds for all types α
                 (α is bound in τ)

τ₁ <: τ₂      — τ₁ is a subtype of τ₂
                 (every value of τ₁ is also a value of τ₂)

τ₁ ~ τ₂       — type equality (System FC)

e ▷ γ          — cast e by coercion γ (System FC)

Γ, x:τ         — context Γ extended with binding x:τ

x:τ ∈ Γ        — binding x:τ exists in context Γ

e → e'         — e reduces (evaluates) to e' in one step`}
            </CodeBox>
            <Heading>BNF Grammar Notation</Heading>
            <CodeBox>
                {`e ::= x | λx:τ. e | e₁ e₂`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Verbatim />
                    ::=
                </Word> means "is defined as." <Word>
                    <Verbatim />
                    |
                </Word> means "or." This defines e as one of three forms — a variable, an abstraction, or an application.
                This is the complete syntax. There are no other term forms in the base calculus.
            </Paragraph>
            <Heading>Derivation Example</Heading>
            <Paragraph>
                Prove <Word>
                    <Verbatim />
                    &#123;f: Int→Bool, x: Int&#125; ⊢ f x : Bool
                </Word>:
            </Paragraph>
            <CodeBox>
                {`  f:Int→Bool ∈ {f:Int→Bool, x:Int}       x:Int ∈ {f:Int→Bool, x:Int}
  ─────────────────────────────────(Var)   ───────────────────────────(Var)
  {f:Int→Bool, x:Int} ⊢ f : Int→Bool      {f:Int→Bool, x:Int} ⊢ x : Int
  ──────────────────────────────────────────────────────────────────────────(App)
  {f:Int→Bool, x:Int} ⊢ f x : Bool`}
            </CodeBox>
            <Paragraph>
                Two applications of (Var) feed into (App). The tree terminates when every leaf is an axiom (a rule with no
                premises, or a context lookup). This is a <Word>
                    <Bold />
                    typing derivation
                </Word> — a proof that the term is well-typed. If no such tree exists, the term is ill-typed.
            </Paragraph>
        </Message>
        <Message
            at="2026-02-08T15:39:56.539440Z"
        >
            <Origin>019c3de9-17cc-74e1-a6bc-a5af70655f48</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>There we go. I understand that. Now how about polymorphism? What formalism captures that?</Paragraph>
        </Message>
        <Message
            at="2026-02-08T15:40:18.865529Z"
        >
            <Origin>019c3de9-17cc-794d-9a29-b078589897ef</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Heading>System F (λ2) — Polymorphic Lambda Calculus</Heading>
            <Paragraph>Extend STLC with two new term forms and one new type form:</Paragraph>
            <Heading>New Syntax</Heading>
            <CodeBox>
                {`${''}e ::= ... | Λα. e | e [τ]
τ ::= ... | α | ∀α. τ`}
            </CodeBox>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        Λα. e
                    </Word> — <Word>
                        <Bold />
                        type abstraction
                    </Word>: a term parameterized over a type variable α
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        e &#91;τ&#93;
                    </Word> — <Word>
                        <Bold />
                        type application
                    </Word>: instantiate a polymorphic term with concrete type τ
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        α
                    </Word> — a type variable (stands for an unknown type)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        ∀α. τ
                    </Word> — universal type: τ for all possible α
                </Line>
            </Paragraph>
            <Heading>New Typing Rules</Heading>
            <CodeBox>
                {`  Γ ⊢ e : τ    α ∉ FV(Γ)
────────────────────────────── (TAbs)
  Γ ⊢ (Λα. e) : ∀α. τ`}
            </CodeBox>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        FV(Γ)
                    </Word> — free type variables in context Γ
                </Line>
                <Line>
                    The side condition <Word>
                        <Verbatim />
                        α ∉ FV(Γ)
                    </Word> ensures α is genuinely abstract — Γ doesn't already mention it
                </Line>
            </Paragraph>
            <CodeBox>
                {`${''}  Γ ⊢ e : ∀α. τ₁
──────────────────────── (TApp)
  Γ ⊢ e [τ₂] : τ₁[α := τ₂]`}
            </CodeBox>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        τ₁&#91;α := τ₂&#93;
                    </Word> — substitute τ₂ for every free occurrence of α in τ₁
                </Line>
            </Paragraph>
            <Heading>New Reduction Rule</Heading>
            <CodeBox>
                {`${''}(Λα. e) [τ]  →  e[α := τ]`}
            </CodeBox>
            <Paragraph>
                Type application reduces by substituting the type argument into the body. This is the type-level analog of
                <Word>
                    <Verbatim />
                    (λx. e) v → e&#91;x := v&#93;
                </Word>.
            </Paragraph>
            <Heading>Derivation Example</Heading>
            <Paragraph>The polymorphic identity function:</Paragraph>
            <CodeBox>
                {`  α:Type, x:α ⊢ x : α
  ──────────────────────────(Abs)
  α:Type ⊢ (λx:α. x) : α → α
  ────────────────────────────────(TAbs)
  ∅ ⊢ (Λα. λx:α. x) : ∀α. α → α`}
            </CodeBox>
            <Paragraph>
                Instantiate it at <Word>
                    <Verbatim />
                    Int
                </Word>:
            </Paragraph>
            <CodeBox>
                {`${''}  ∅ ⊢ (Λα. λx:α. x) : ∀α. α → α
  ──────────────────────────────────────(TApp)
  ∅ ⊢ (Λα. λx:α. x) [Int] : Int → Int`}
            </CodeBox>
            <Paragraph>Then by reduction:</Paragraph>
            <CodeBox>
                {`${''}(Λα. λx:α. x) [Int]  →  λx:Int. x`}
            </CodeBox>
            <Heading>Relationship to Haskell/TypeScript</Heading>
            <CodeBox>
                {`-- Haskell
id :: forall a. a -> a        ≡  id : ∀α. α → α
id x = x                      ≡  Λα. λx:α. x`}
            </CodeBox>
            <CodeBox>
                {`// TypeScript
function id<T>(x: T): T       ≡  id : ∀α. α → α`}
            </CodeBox>
            <Paragraph>
                Both languages <Word>
                    <Bold />
                    infer
                </Word> the <Word>
                    <Verbatim />
                    Λ
                </Word> and <Word>
                    <Verbatim />
                    &#91;τ&#93;
                </Word> — you never write type abstractions or type applications explicitly. The compiler inserts them.
                System F is the formal object they're elaborating into.
            </Paragraph>
            <Heading>Bounded Quantification (F&lt;:)</Heading>
            <Paragraph>
                TypeScript's <Word>
                    <Verbatim />
                    &lt;T extends U&gt;
                </Word> requires one further extension — combine System F with subtyping:
            </Paragraph>
            <CodeBox>
                {`τ ::= ... | ∀(α <: τ). τ`}
            </CodeBox>
            <CodeBox>
                {`${''}  Γ, α <: τ₁ ⊢ e : τ₂
──────────────────────────────── (TAbsSub)
  Γ ⊢ (Λ(α <: τ₁). e) : ∀(α <: τ₁). τ₂


  Γ ⊢ e : ∀(α <: τ₁). τ₂    Γ ⊢ τ₃ <: τ₁
─────────────────────────────────────────────── (TAppSub)
  Γ ⊢ e [τ₃] : τ₂[α := τ₃]`}
            </CodeBox>
            <Paragraph>
                The only change: α is no longer unconstrained — it must be a subtype of a bound. This is <Word>
                    <Bold />
                    System F&lt;:
                </Word> (F-sub), described formally in Cardelli &amp; Wegner (1985) and chapters 26–28 of TaPL.
            </Paragraph>
        </Message>
        <Message
            at="2026-02-08T15:44:50.801476Z"
        >
            <Origin>019c3ded-943d-7d77-94c1-1f02f91275a0</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                This is good. Now catch up on the basics of SRT, taking notes. Sadly almost everything needs to be regarded
                as a sketch or an attempt building up to formalism. One must try many things on. Focus on syntax, symbols,
                specific relationships, etc
            </Paragraph>
        </Message>
        <Message
            at="2026-02-08T15:45:06.715387Z"
        >
            <Origin>019c3ded-943d-7d4e-bbcc-d1f8d83920ed</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                I want to make sure I research the right thing — SRT has several possible expansions in formal methods
                contexts. Which are you referring to?
            </Paragraph>
            <Action>Used ask user input v0</Action>
        </Message>
        <Message
            at="2026-02-08T15:45:46.521714Z"
        >
            <Origin>019c3dee-6d1c-7d48-9c31-6ae4ff55746a</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Q: What does SRT refer to here? A: Semantic Reference Theory, the name of the project and the formalism we
                are developing locally. We are building a type system
            </Paragraph>
        </Message>
        <Message
            at="2026-02-08T15:46:43.325947Z"
        >
            <Origin>019c3dee-6d1c-7701-a30d-60aac7b9dea5</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Let me dig through our past conversations to find your SRT work.</Paragraph>
            <Action>Searched past conversations for “Semantic Reference Theory SRT type system”</Action>
            <Action>Searched past conversations for “SRT R(x,y,t) transpiration referent definition axiom”</Action>
            <Action>
                Searched past conversations for “semantic conjugation homoiconicity subjectivity objectivity formalism
                perspective”
            </Action>
            <Action>
                Searched past conversations for “SRT extension definition constant axiom literal symbol referent type”
            </Action>
            <Action>
                Searched past conversations for “SRT type system formalize perspective coherence objective disqualification
                subjective qualification”
            </Action>
            <Paragraph>
                OK. Here are my notes on SRT as it stands, extracted from our past conversations, focused on the formal
                skeleton. I'm presenting what I have, flagging what's specified vs. what's still a sketch.
            </Paragraph>
            <Heading>SRT — Notes on the Formalism</Heading>
            <Heading>What is specified</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Domain:
                </Word> Referents. A referent is that which a variable might stand for in any consistent first-order logic.
                This is the domain of discourse — not objects, not sets, not types. Referents.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Signature:
                </Word> One ternary relation, no functions, no constants.
            </Paragraph>
            <CodeBox>
                {`R(x, y, t)`}
            </CodeBox>
            <Paragraph>Alternate notation via "transpiration":</Paragraph>
            <CodeBox
                language="srt"
            >
                {`x =t> y`}
            </CodeBox>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Verbatim />
                        x
                    </Word> — subject position (that which refers)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        y
                    </Word> — object position (that which is referred to)
                </Line>
                <Line>
                    <Word>
                        <Verbatim />
                        t
                    </Word> — transpiration (the manner/mode/context of the referring)
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Logical framework:
                </Word> First-order logic. Axioms are hypothetical only (no assertoric axioms in base SRT).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Referent roles:
                </Word> Referents can play two semantic roles:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Subjective / symbolic:
                    </Word> arbitrary representation, no required literal form. Symbols.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Objective / literal:
                    </Word> that which is represented. Literals.
                </Line>
            </Paragraph>
            <Paragraph>
                This is not a type distinction in the formal sense yet — it's a role distinction within the semantics of R.
            </Paragraph>
            <Heading>Extension mechanism</Heading>
            <Paragraph>SRT can only be extended by:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Adding one constant at a time</Line>
                <Line>
                    Accompanied by axioms that describe it — these constitute a <Word>
                        <Bold />
                        definition
                    </Word> (in SRT's own sense of "definition")
                </Line>
                <Line>The extended theory must remain consistent</Line>
            </Paragraph>
            <Paragraph>
                Once extended with referents and definitions that constitute a consistent theory, it ceases to be SRT and
                becomes a named <Word>
                    <Bold />
                    Semantic Theory
                </Word> — an ontology rather than an epistemology.
            </Paragraph>
            <Heading>Semantic conjugation</Heading>
            <Paragraph>
                Defined as the propositional equivalent of homoiconicity. SRT can host its own canonical representation: it
                can describe the relationship between a representation and what that representation refers to, using the
                same R(x,y,t) relation. SRT's canonical representation is natural language, expressed existentially.
            </Paragraph>
            <Heading>Perspective and consciousness (the speculative layer)</Heading>
            <Paragraph>
                A <Word>
                    <Bold />
                    perspective
                </Word> is a consistent semantic theory (a consistent extension of SRT). Adding new literals not in its
                representation makes the perspective <Word>
                    <Bold />
                    incoherent
                </Word> (inconsistent). Coherence can be restored (non-uniquely) by adding symbolic referents that
                incorporate the new literals — this is <Word>
                    <Bold />
                    subjective qualification
                </Word>.
            </Paragraph>
            <CodeBox>
                {`perspective P (consistent)
    + new literal l ∉ representation(P)
    → P' (inconsistent)
    + symbolic referent s such that l ∈ representation(P'')
    → P'' (consistent, P'' ≠ P)`}
            </CodeBox>
            <Paragraph>
                A change in perspective = objective disqualification → subjective qualification. A conscious experience = a
                representation of this change, possessed by the qualifier, in the context of identity semantics.
                Consciousness = the narrative preservation of qualifier identity through this process (semantic
                homeostasis).
            </Paragraph>
            <Heading>What is NOT yet specified (flagged in our earlier assessment)</Heading>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Axiom schemas for R(x,y,t):
                    </Word> What are the structural axioms? Reflexivity? Transitivity? Symmetry? What holds of R in general
                    before any extension?
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Formal definition of transpiration (t):
                    </Word> What sort of thing is t? Is it a referent? A relation? Does it range over the same domain as x
                    and y?
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Precise rules for definitional extension:
                    </Word> What exactly counts as a valid definition? What is the formal criterion for "axioms that
                    describe a constant"?
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Consistency proof (or relative consistency):
                    </Word> No proof yet that SRT-as-described is consistent, or consistent relative to some known system.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        The literal/symbol role distinction
                    </Word> has no formal typing yet — it's described semantically but not captured in the syntax or
                    inference rules.
                </Line>
            </Paragraph>
            <Heading>Where this sits relative to what we just covered</Heading>
            <Paragraph>
                The type-theoretic formalism (λ-calculus, System F, etc.) gives you typing judgments: <Word>
                    <Verbatim />
                    Γ ⊢ e : τ
                </Word>. SRT doesn't have that yet. It has a single relation and an extension discipline. The question
                you're now asking — building a type system — is essentially: how do you layer typing judgments onto the
                R(x,y,t) substrate? How does the subject/object role distinction become a formal type distinction? How does
                definitional extension interact with typing?
            </Paragraph>
            <Paragraph>
                That's the gap between where SRT is and where the formalism in this conversation can take it.
            </Paragraph>
        </Message>
    </Chapter>
);
