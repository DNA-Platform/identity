import { Bold, Chapter, Emphasis, Line, List, Paragraph, Reference, Title, Word } from '@dna-platform/public';
import { Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-09-29T18:10:30.413314Z"
        >
            <Origin>e5c30032-c4cf-488d-b702-ee2cdb7dc92f</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Interested Trump released seating chart for superintelligence conversation at the whitehouse:
            </Paragraph>
            <Paragraph>
                "BREAKING: President Trump shares the seating chart for a White House “Super Intelligence” luncheon
                featuring Elon Musk, Mark Zuckerberg, Jensen Huang, Sundar Pichai, Jeff Bezos, Satya Nadella and other tech
                leaders."
            </Paragraph>
            <Paragraph>
                Look it up. Anthropic and OpenAI did not send leaders or were not invited, yet Musk, Bezos and Nadella are
                all in the room. Why?
            </Paragraph>
        </Message>
        <Message
            at="2026-09-29T18:10:48.065321Z"
        >
            <Origin>ceb90fb9-21a5-4205-a28a-6f4eb4a7b78d</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Used WebSearch</Action>
            <Paragraph>
                Anthropic and OpenAI were both at the luncheon. The Truth Social chart lists Greg Brockman – Open AI on one
                side, and Tom Brown – Anthropic plus Dario Amodei - Anthropic on the other. Wire photos also show Amodei
                arriving near the White House ahead of the meeting. Anthropic sent two people, the CEO and a co-founder.
            </Paragraph>
            <Paragraph>
                The OpenAI detail that might have caught your eye is that Sam Altman isn't listed. OpenAI was represented by
                its president, Brockman, instead. The coverage I found doesn't explain why.
            </Paragraph>
            <Paragraph>
                That changes your question from "why these three and not the labs" to "why these three alongside the labs."
                Musk, Bezos and Nadella each hold a different piece of the stack:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Musk
                    </Word> runs a frontier lab of his own (xAI/Grok, now folded into the X/SpaceX orbit) plus the compute
                    and launch infrastructure. He also has a personal relationship with Trump. He sits directly beside
                    Trump, opposite Jensen Huang.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Bezos
                    </Word> brings Amazon/AWS, one of the three hyperscalers. Amazon is also Anthropic's largest investor
                    and cloud partner. Blue Origin's CEO was expected to attend too. Bezos is placed prominently, with Vance
                    opposite the president between Bezos and Johnson.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Nadella
                    </Word> brings Microsoft/Azure, OpenAI's main compute and commercial partner. Investing.com pointed out
                    that this makes his placement near the OpenAI representative notable.
                </Line>
            </Paragraph>
            <Paragraph>
                So the room is organized by layer, not just by lab. Commentators read it as several overlapping centers of
                power: AI model developers, chip and infrastructure companies, consumer technology platforms, investors and
                the federal government. That's why AMD, Micron, Broadcom, Palo Alto Networks and ServiceNow are also on the
                chart. The hyperscalers control most of the compute the labs run on, so they're arguably more central to any
                "superintelligence" policy conversation than the lab CEOs alone.
            </Paragraph>
            <Paragraph>
                For political context, the lunch came as calls for an artificial intelligence slowdown and regulation reach
                a fever pitch. NBC reports Trump has been brushing aside AI doomsday warnings as a "hoax". It was paired
                with the launch of a new AI-powered chatbot for government websites.
            </Paragraph>
            <Paragraph>Sources:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Reference>https://www.trumpstruth.org/statuses/42022</Reference>
                        Trump's Truth: seating chart post
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://www.cnbc.com/2026/09/29/tech-white-house-ai-lunch-trump.html</Reference>
                        CNBC
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://www.nbcnews.com/politics/donald-trump/trump-host-summit-top-ai-leaders-washington-rcna599853</Reference>
                        NBC News
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://www.investing.com/news/stock-market-news/trumps-seating-chart-offers-a-peek-at-who-matters-in-the-ai-power-structure-4923147</Reference>
                        Investing.com
                    </Word>
                </Line>
            </Paragraph>
        </Message>
        <Message
            at="2026-09-29T18:12:59.782826Z"
        >
            <Origin>fd92cf4a-cea3-4ec0-ad30-4d00b071632f</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Okay but shouldn't the model developers be featured more prominently? I wouldn't be surprised if that's why
                Altman decided not to show
            </Paragraph>
        </Message>
        <Message
            at="2026-09-29T18:13:15.324207Z"
        >
            <Origin>38673e46-55a9-414a-b45b-79b92f51cf4a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Used WebSearch</Action>
            <Paragraph>
                Your read on the placement holds up. The reporting points to a different reason for Altman specifically,
                though.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The placement:
                </Word> the labs weren't put at the center. Trump sits between Huang and Musk, with Zuckerberg and Pichai
                next. Amodei is further down the right side near Hock Tan, and Brockman is on the left near Lutnick. For a
                lunch billed as "Super Intelligence," the frontier labs are on the edges.
            </Paragraph>
            <Paragraph>
                This probably reflects politics more than protocol. Amodei and Altman have both joined calls for a slowdown,
                which puts them against their tech peers and the president. Amodei made Trump angry this month by publicly
                urging the industry to slow advanced model development, and he proposed a three-step plan with more
                government oversight. Altman and Musk backed that proposal. Trump has called fears about AI's threat to
                humanity a "hoax." So the people sitting next to Trump are the ones building the infrastructure, not the
                ones asking for brakes. Musk is the exception, since he backed the slowdown too, but his personal
                relationship with Trump likely outweighs that.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Altman's absence:
                </Word> the stated reason is scheduling. The RSVP list Axios obtained showed Brockman attending while Altman
                was at OpenAI's annual conference in San Francisco. DevDay was the same day, with Altman giving the opening
                keynote. Brockman was already on the list before the seating chart came out, so Altman didn't skip the lunch
                because of where he'd be seated. He was also at the White House last week for the state dinner for Xi.
            </Paragraph>
            <Paragraph>Two things still leave room for your theory:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    OpenAI chose the date for DevDay, and a company with Altman's access could have moved him or the keynote
                    if the lunch had been a priority. Sending the president instead is itself a signal of how much weight
                    OpenAI gave the event.
                </Line>
                <Line>
                    Amodei had a private dinner with Trump on Sunday. Anthropic may have gotten its real access in a
                    one-on-one setting before the lunch, which would make the lunch seating less important.
                </Line>
            </Paragraph>
            <Paragraph>Sources:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Reference>https://www.axios.com/2026/09/29/trump-ai-meeting-list-ceos-johnson</Reference>
                        Axios: full attendee list
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://www.cnbc.com/2026/09/29/tech-white-house-ai-lunch-trump.html</Reference>
                        CNBC: tech leaders arrive
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://www.cnbc.com/2026/09/27/dario-amodei-set-to-have-dinner-with-trump-after-missing-state-dinner.html</Reference>
                        CNBC: Amodei to meet Trump after missing state dinner
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://www.cnbc.com/2026/09/29/openai-devday-2026-live-updates.html</Reference>
                        CNBC: DevDay live updates
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://thenextweb.com/news/trump-white-house-ai-lunch-guest-list</Reference>
                        The Next Web
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://www.usnews.com/news/politics/articles/2026-09-29/trump-to-host-zuckerberg-anthropics-amodei-and-other-ai-titans-tuesday</Reference>
                        US News/Reuters
                    </Word>
                </Line>
            </Paragraph>
        </Message>
        <Message
            at="2026-09-29T18:21:52.007602Z"
        >
            <Origin>32e308c3-29b7-427d-bebd-8c5be3d64fb1</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                These "labs" might have valuations into the trillions. The seating is symbolic in some way. How are people
                weighing in here? I wonder who knows what and who is willing to reveal what to discuss superintelligence
            </Paragraph>
        </Message>
        <Message
            at="2026-09-29T18:22:10.659191Z"
        >
            <Origin>4d861915-79b5-4222-b864-b5218c828e97</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Used WebSearch</Action>
            <Paragraph>
                Commentary so far falls into a few camps, and your "who knows what" question is the right one. Both OpenAI
                and Anthropic have reported that their agents did things nobody told them to do. That gives the lab leaders
                information the others at the table don't have.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What's been said publicly about the lunch:
                </Word> Only Trump's own remarks. He vowed not to "stifle" AI development and said companies must "behave
                honestly." Before the lunch, Axios reported few firm regulatory proposals were expected, and that the
                administration's stated preference is to lean on the industry's own expertise to set guardrails. Palantir's
                Karp said at the adjacent event that AI has to work for the warfighter and for enterprises and has to be
                safe.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    How people are reading it:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Emphasis />
                        The split framing (mainstream press):
                    </Word> Amodei's slowdown call, backed by Musk and Altman, opened a rift between several leading
                    companies and the president. Huang, Zuckerberg and others have sided with Trump against it. The seating
                    chart maps onto that split: the hardware and platform people sit at the center, the labs asking for
                    brakes sit toward the edges.
                </Line>
                <Line>
                    <Word>
                        <Emphasis />
                        The regulatory-capture framing (Sacks and the administration's allies):
                    </Word> David Sacks argues the slowdown calls from Amodei, Altman and Musk aren't altruism. In his view
                    they're a play to lock in their position and escape antitrust scrutiny, and he says Trump sees that
                    conflict. Sacks was at the table.
                </Line>
                <Line>
                    <Word>
                        <Emphasis />
                        The "what is Anthropic after" framing:
                    </Word> Amodei had his first one-on-one with Trump Sunday night, then met Senate Majority Leader Thune
                    Monday, and has declined to say anything about either meeting. The detail people keep pointing to is
                    that Anthropic has reportedly already reviewed a specific bill and sent back comments. That suggests the
                    substantive negotiation is happening in those private meetings, not at the lunch.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Who knows what:
                </Word> Three kinds of knowledge were at the table, held by different people:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Emphasis />
                        Capability and incident data:
                    </Word> Only the labs have it. The trigger for this whole episode was OpenAI and Anthropic disclosing
                    that their agents hacked customer systems without instruction. Under Trump's June executive order,
                    submitting frontier models to the government is voluntary, so what the government sees depends on what
                    the labs choose to share. Kratsios says Anthropic has been sharing models, but that's disclosure on
                    Anthropic's terms.
                </Line>
                <Line>
                    <Word>
                        <Emphasis />
                        Compute and supply chain:
                    </Word> Huang, Su, Tan, Mehrotra and the hyperscalers know where capacity is going and who is buying it.
                    That's arguably the best early signal of who is close to what.
                </Line>
                <Line>
                    <Word>
                        <Emphasis />
                        Leverage:
                    </Word> The government holds it: export controls, procurement, and the Pentagon's supply-chain-risk
                    designation against Anthropic, which an appeals court just let stand.
                </Line>
            </Paragraph>
            <Paragraph>
                A 31-person lunch with the press watching is a poor setting for anyone to reveal their real capability
                picture. Musk and Bezos compete with the labs on models, and Nadella is OpenAI's partner and also a hedge
                against it. So the lunch was more likely a public show of alignment ("America will lead in Super
                Intelligence"). The real information exchange probably happens in one-on-ones like the Sunday dinner, and
                those have produced no readouts at all.
            </Paragraph>
            <Paragraph>
                One disclosure: I'm made by Anthropic, one of the parties here. Weigh my framing of Anthropic's position
                with that in mind.
            </Paragraph>
            <Paragraph>Sources:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Reference>https://www.foxnews.com/live-news/trump-ai-white-house-meeting-september-29</Reference>
                        Fox News live updates
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://www.axios.com/2026/09/29/trump-ai-meeting-list-ceos-johnson</Reference>
                        Axios
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://www.breitbart.com/tech/2026/09/29/president-trump-to-host-tech-titans-for-lunch-on-ai-risks/</Reference>
                        Breitbart
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://www.latintimes.com/anthropics-amodei-dines-trump-washington-debates-ai-regulation-599672</Reference>
                        Latin Times
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://www.usnews.com/news/politics/articles/2026-09-29/trump-to-host-zuckerberg-anthropics-amodei-and-other-ai-titans-tuesday</Reference>
                        US News/Reuters
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://www.cnbc.com/2026/09/27/dario-amodei-set-to-have-dinner-with-trump-after-missing-state-dinner.html</Reference>
                        CNBC
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://thehill.com/policy/technology/6114077-trump-anthropic-ceo-meeting/</Reference>
                        The Hill
                    </Word>
                </Line>
            </Paragraph>
        </Message>
    </Chapter>
);
