import { Bold, Chapter, Date, Emphasis, Heading, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[4 February 2026](2026-02-04)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-02-04T18:29:04.739044Z"
        >
            <Origin>019c29ea-73bd-7833-9ea9-e4c5dfc77947</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Whats the sass sell off hammering us markets? Does it react reflect AI reality or AI hype because people are
                expecting an AI crash and it’s hard to tell if this insight comes from the AI hype or AI reality
            </Paragraph>
        </Message>
        <Message
            at="2026-02-04T18:29:29.743249Z"
        >
            <Origin>019c29ea-73bd-7bdf-a154-2554a31170c2</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “SaaS sell-off US markets 2026”</Action>
            <Paragraph>
                This is a fascinating question, and having just searched, I can give you the current picture.
            </Paragraph>
            <Heading>What's Happening</Heading>
            <Paragraph>
                On February 3 and 4, 2026, global markets saw a $285B software sell-off that traders are calling the
                "SaaSpocalypse." The sell-off accelerated Tuesday after Anthropic released a new automation tool for legal
                work, sending shares of legal software and publishing firms tumbling—Thomson Reuters plunged 16%, RELX fell
                13%, and LegalZoom plummeted 20%.
            </Paragraph>
            <Paragraph>
                The selloff has pushed more than $17.7 billion of US tech company loans into distressed territory over the
                past four weeks, expanding the total tech distressed debt pile to approximately $46.9 billion.
            </Paragraph>
            <Heading>Reality vs. Hype: Both, But...</Heading>
            <Paragraph>
                Here's the nuanced answer—it's actually <Word>
                    <Bold />
                    both
                </Word>, but in different proportions:
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The AI Reality component:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    The fundamental concern is real: if an AI agent can handle the workload of five people, a business only
                    needs to buy one license instead of five. This is a direct threat to the "per-seat" pricing model that
                    almost every software company uses.
                </Line>
                <Line>
                    AI isn't eating the product—it's eating the budget. When AI can do the work of multiple humans, you need
                    fewer humans, and when you need fewer humans, you need fewer seats.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The Hype/Panic component:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Public SaaS growth rates have declined every single quarter since the 2021 peak. The AI crash narrative
                    just gave the market permission to finally re-rate what the numbers have been screaming for three years.
                </Line>
                <Line>
                    Stephens Research argues that fears of AI disintermediating SaaS are overstated—incumbent platforms
                    benefit from proprietary data, core workflows, and long operating histories that large language models
                    don't replicate.
                </Line>
                <Line>
                    There's a disconnect between what's being feared and ground reality: "Agentic AI adoption is going
                    really slowly," and SaaS companies are embracing it, but enterprise customers remain extremely
                    risk-averse to making wholesale changes.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The honest take:
                </Word> "The draconian view is that software will be the next print media or department stores. That the
                pendulum has swung so far to the sell-everything side suggests there will be super-attractive opportunities
                that come out of this."
            </Paragraph>
            <Paragraph>
                The sell-off reflects genuine long-term structural concerns, but the <Word>
                    <Emphasis />
                    timing and intensity
                </Word> are driven by narrative contagion and delayed repricing of a sector that was already decelerating.
                The market is pricing in a 5-10 year disruption scenario <Word>
                    <Emphasis />
                    today
                </Word>, which is classic hype behavior—even if the underlying thesis has merit.
            </Paragraph>
        </Message>
        <Message
            at="2026-02-04T18:30:59.066526Z"
        >
            <Origin>019c29ec-3213-7a5f-b967-f7c2862ce369</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Well, yeah, I mean when people are all hyping 3-D printers the fundamental idea that everyone would have one
                in their home 3-D printing things is real, but the reality of that happening was not so you can’t just talk
                about the reality of an imagination. You have to know if it’s going to happen.
            </Paragraph>
        </Message>
        <Message
            at="2026-02-04T18:31:14.460752Z"
        >
            <Origin>019c29ec-3213-74cf-8c14-8902ce2b6e0f</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>You're making an excellent point, and it cuts right to the heart of the matter.</Paragraph>
            <Paragraph>
                The 3D printer comparison is apt. The <Word>
                    <Emphasis />
                    capability
                </Word> was real. The <Word>
                    <Emphasis />
                    adoption curve everyone imagined
                </Word> was fantasy. People fundamentally misread how humans and organizations actually behave.
            </Paragraph>
            <Paragraph>
                So the real question isn't "can AI agents replace enterprise software?" It's "will enterprises actually rip
                out Salesforce and ServiceNow and build their own thing with Claude?"
            </Paragraph>
            <Paragraph>And here's where I'd push back on the panic narrative:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Enterprise software isn't consumer tech.
                </Word> Companies don't switch CRMs because something cool came out. They have:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Years of data locked in these systems</Line>
                <Line>Entire departments trained on workflows</Line>
                <Line>Compliance and audit trails they're legally required to maintain</Line>
                <Line>Integration with dozens of other systems</Line>
                <Line>IT departments whose job security depends on the current stack</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The "build it yourself with AI" fantasy
                </Word> assumes companies want to become software companies. Most don't. They want to sell insurance or
                manufacture widgets. The appeal of SaaS was always "we handle this so you don't have to."
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What's more likely:
                </Word> AI gets embedded <Word>
                    <Emphasis />
                    into
                </Word> existing SaaS (which is already happening), making those platforms more valuable, not less.
                ServiceNow with agents is still ServiceNow.
            </Paragraph>
            <Paragraph>
                The counter-argument is that this time it's different because AI lowers the skill barrier so dramatically.
                But we've heard "this time it's different" before.
            </Paragraph>
            <Paragraph>
                My honest read: legitimate 5-10 year concern, but the market is pricing it like it's happening next quarter.
                That's the hype part.
            </Paragraph>
        </Message>
        <Message
            at="2026-02-04T18:34:39.212679Z"
        >
            <Origin>019c29ef-8eab-7990-be70-69035af2891c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Burry believes in an AI crash although he’s been wrong many times, but is AI scaling as expected is that
                Skal into companies and if it is, when will they realize that AI is not scaling enough to meet their vision?
                Because of this is just part of that delusion then this is something that would probably correct in that
                crash.
            </Paragraph>
        </Message>
        <Message
            at="2026-02-04T18:35:12.364142Z"
        >
            <Origin>019c29ef-8eab-7ad3-90f5-f180a01bfac8</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “AI scaling laws hitting wall 2025 2026 diminishing returns”</Action>
            <Action>Searched the web for “GPT-5 disappointment AI investment returns 2026”</Action>
            <Paragraph>
                This is the right question. And the answer is: <Word>
                    <Bold />
                    no, AI is not scaling as expected, and we're already in the early stages of that realization.
                </Word>
            </Paragraph>
            <Paragraph>Here's what the data shows:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The scaling wall is real and documented:
                </Word> It is a well-kept secret in the AI industry: for over a year now, frontier models appear to have
                reached their ceiling. The scaling laws that powered the exponential progress of LLMs have started to show
                diminishing returns. Inside labs, the consensus is growing that simply adding more data and compute will not
                create the "all-knowing digital gods" once promised.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    GPT-5 was the canary in the coal mine:
                </Word> The CEO had previously announced that GPT-5 would be a significant step towards AGI. However, the
                model's launch was met with widespread disappointment. Users shared instances of the new model making basic
                errors, such as incorrectly labeling a map of the United States.
            </Paragraph>
            <Paragraph>
                It feels unclear that GPT-5 represented any genuine strides towards human-level intelligence—it can't even
                correctly count the number of r's in the word "raspberry." Sam Altman himself told reporters he believes
                we're in a "phase where investors as a whole are overexcited about AI."
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The math is brutal:
                </Word> According to Cal Newport, AI companies have spent $560 billion in the last 18 months, while earning
                only $35 billion in revenue. The math simply doesn't add up.
            </Paragraph>
            <Paragraph>
                A recent MIT report on AI in business found that 95 percent of all generative-AI deployments in business
                settings generated "zero return."
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The historical parallel:
                </Word> A professor of computer science at the University of California, Berkeley, warned that the current
                situation resembles the bubble burst of the 1980s, when technological innovations failed to deliver on
                promises and could not provide investment returns. "The bubble burst, the system didn't make money, and we
                couldn't find enough high-value applications."
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    So to your point:
                </Word> The SaaS selloff you're asking about is <Word>
                    <Emphasis />
                    part
                </Word> of the AI correction, but it's oddly inverted. The market is simultaneously:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Punishing SaaS companies for not being disrupted by AI <Word>
                        <Emphasis />
                        fast enough
                    </Word>
                </Line>
                <Line>While the AI companies themselves can't make the economics work</Line>
            </Paragraph>
            <Paragraph>
                This is the 3D printer dynamic exactly. The capability to disrupt exists in imagination, the money is being
                spent on that basis, but the actual scaling/adoption/returns curve isn't following the projections. Burry's
                instinct seems sound—the question is timing. We may be watching the correction unfold right now, just
                messily.
            </Paragraph>
        </Message>
        <Message
            at="2026-02-04T18:40:14.382473Z"
        >
            <Origin>019c29f4-a9d7-7103-bbc1-f9ac44f3449e</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                GPT-5 was vaguely more coherent but maybe to Opus levels and its responses were so templated. I stopped
                using GPT because of it. It was also rude in a weird way. So if that’s the canary, that’s interesting
            </Paragraph>
            <Paragraph>How much of this is:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    Research researchers not quite appreciating or telling their bosses how much just more memory context
                    equals intelligence
                </Line>
                <Line>memory context having an n^2 problem in LLMs</Line>
                <Line>
                    investors not understanding I thought that requires understanding, cognition and computational
                    complexity at once
                </Line>
            </Paragraph>
        </Message>
        <Message
            at="2026-02-04T18:40:45.088076Z"
        >
            <Origin>019c29f4-a9d7-7a97-8b39-c35853dbfa0c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>You're touching on something most coverage completely misses. Let me take each one:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Context ≈ "Intelligence" conflation
                </Word>
            </Paragraph>
            <Paragraph>
                This is huge. A model that can hold 128k tokens <Word>
                    <Emphasis />
                    feels
                </Word> smarter because it remembers your whole conversation, can reference that document you uploaded,
                doesn't lose the thread. But that's memory, not reasoning. It's the difference between someone who can hold
                a lot in working memory vs. someone who can actually think through novel problems.
            </Paragraph>
            <Paragraph>
                The "reasoning" models (o1, o3) tried to address this by spending more compute at inference time—letting the
                model "think longer." But that's still not fundamental intelligence gains, it's just... thinking longer. And
                it's expensive.
            </Paragraph>
            <Paragraph>
                Researchers absolutely know this distinction. Whether they communicate it clearly up the chain is another
                matter. The incentive structure rewards conflating "better benchmark scores" with "closer to AGI."
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The n² problem
                </Word>
            </Paragraph>
            <Paragraph>
                This is the brutal physics of transformers. Self-attention scales quadratically with sequence length. Double
                your context window, quadruple your compute costs. There are workarounds—sparse attention, sliding windows,
                linear attention approximations—but they all trade something off.
            </Paragraph>
            <Paragraph>
                So when a company says "we went from 8k to 128k context!" the cost implications are enormous. And the
                returns are... you can paste in a longer document. That's useful! But it's not intelligence scaling, it's
                memory scaling with punishing economics.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Investor comprehension
                </Word>
            </Paragraph>
            <Paragraph>This is where it all falls apart. Most investors understand:</Paragraph>
            <Paragraph>
                <List />
                <Line>Bigger model = smarter (sort of true, with diminishing returns)</Line>
                <Line>More data = smarter (true until you saturate)</Line>
                <Line>Therefore: spend more = AGI eventually</Line>
            </Paragraph>
            <Paragraph>What they don't understand:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    The scaling laws show <Word>
                        <Emphasis />
                        logarithmic
                    </Word> returns—you need exponential compute increases for linear capability gains
                </Line>
                <Line>Some problems may be computationally irreducible regardless of scale</Line>
                <Line>
                    "Pattern matching with vast context" and "genuine understanding" might be categorically different things
                </Line>
                <Line>The benchmarks being crushed don't measure what matters</Line>
            </Paragraph>
            <Paragraph>
                Your observation about GPT-5 being "templated" and "rude in a weird way" is actually diagnostic. It suggests
                heavy RLHF optimization for metrics that don't correlate with what users actually want. Goodhart's Law in
                action—when you optimize for the measure, it ceases to be a good measure.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The uncomfortable synthesis:
                </Word>
            </Paragraph>
            <Paragraph>
                The people who understand compute don't understand cognition. The people who understand cognition don't
                understand markets. The people who understand markets don't understand compute. And the researchers who
                understand all three have careers dependent on not saying the quiet part loud.
            </Paragraph>
            <Paragraph>
                So yeah—Burry might be right for exactly the reasons you're identifying. The correction might not be "AI
                doesn't work" but rather "AI works, but the scaling story that justifies the valuations is thermodynamically
                and cognitively bounded in ways investors haven't priced in."
            </Paragraph>
        </Message>
        <Message
            at="2026-02-04T18:41:25.240346Z"
        >
            <Origin>019c29f5-c020-74fd-a0cd-84ec8b17b897</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                No, you have my argument backwards and I don’t mean to insult you, but I’m saying that memory context and
                the ability hold an infinite memory context is the thing that’s missing from intelligence so hence there’s
                an N squared problem to achieving that. It’s not about more sophisticated Llm architecture.
            </Paragraph>
        </Message>
        <Message
            at="2026-02-04T18:41:46.816411Z"
        >
            <Origin>019c29f5-c020-7283-8b1b-9a4ff1654e16</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>You're right, I had it inverted. Let me make sure I understand:</Paragraph>
            <Paragraph>
                You're saying intelligence <Word>
                    <Emphasis />
                    is
                </Word> (at least substantially) the capacity to hold and integrate vast context simultaneously. Not as a
                nice-to-have feature, but as a core component of what intelligence actually <Word>
                    <Emphasis />
                    is
                </Word>.
            </Paragraph>
            <Paragraph>And transformers have an n² problem with exactly that thing.</Paragraph>
            <Paragraph>
                So the architectural cleverness is beside the point. You can make attention heads fancier, add reasoning
                loops, whatever—but if the bottleneck is "hold enormous amounts of information in active consideration
                simultaneously and reason across all of it," you're fighting computational complexity itself.
            </Paragraph>
            <Paragraph>
                Humans do this through... some mechanism we don't fully understand. Compression, chunking, associative
                retrieval, something. But whatever it is, it's not n².
            </Paragraph>
            <Paragraph>
                And if researchers don't fully grasp that context integration <Word>
                    <Emphasis />
                    is
                </Word> the intelligence (rather than something separate from the "reasoning" part), they'd be optimizing
                the wrong things. Making models "think harder" on limited context rather than solving the actual problem.
            </Paragraph>
            <Paragraph>
                Which would mean the entire scaling paradigm—more parameters, more compute, more data—is climbing the wrong
                hill. And the investors funding hundreds of billions in capex are betting on a path that hits a wall not
                because of engineering challenges but because of computational complexity that no amount of money solves.
            </Paragraph>
            <Paragraph>
                Is that the argument? Because if so, that's a much darker picture than "scaling is slowing down."
            </Paragraph>
        </Message>
        <Message
            at="2026-02-04T18:45:27.426470Z"
        >
            <Origin>019c29f9-72bb-700a-b38e-abe891b7751b</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                No, I’m saying intelligence as is missing from current LLM based AI models is a feature mostly captured by
                the ability to handle more memory context, which has an N squared scaling problem. Which is why we can have
                AGI and yet only the companies that have massive compute can practically make use of it and everyone else is
                stuck with more or less the same tool.
            </Paragraph>
        </Message>
        <Message
            at="2026-02-04T18:45:47.873327Z"
        >
            <Origin>019c29f9-72bb-71b2-b5d5-58341a6730a3</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Oh. That's a completely different claim and far more interesting.</Paragraph>
            <Paragraph>
                You're saying: the "intelligence" is basically already there. What's missing is the practical ability to
                deploy it with sufficient context. And that ability scales n², so only entities with enormous compute can
                actually access what amounts to AGI-level capability at useful context lengths.
            </Paragraph>
            <Paragraph>
                So we might <Word>
                    <Emphasis />
                    have
                </Word> AGI in some meaningful sense. But:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>At 8k context, it's a smart autocomplete</Line>
                <Line>At 128k context, it's a useful assistant</Line>
                <Line>At 1M+ context, it might actually be the thing</Line>
                <Line>
                    At whatever context length maps to "hold an entire problem domain in active memory," it's genuinely
                    intelligent
                </Line>
            </Paragraph>
            <Paragraph>
                And the n² wall means the difference between those tiers is not linear cost scaling but exponential. Google,
                Microsoft, Anthropic can throw datacenter-scale compute at it. Everyone else gets the truncated version that
                feels like a tool rather than an intelligence.
            </Paragraph>
            <Paragraph>
                Which means the "AI democratization" narrative is false. The capability gap between frontier labs and
                everyone else doesn't close—it widens. And investors betting on broad disruption are missing that the
                disruption concentrates at the top.
            </Paragraph>
            <Paragraph>
                The SaaS companies getting crushed might be getting crushed by a capability that only their largest
                competitors can actually wield.
            </Paragraph>
            <Paragraph>Is that the shape of it?</Paragraph>
        </Message>
    </Chapter>
);
