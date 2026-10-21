import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Reference, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[16 October 2026](2026-10-16)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-10-16T08:46:17.596607Z"
        >
            <Origin>e5aad818-4c52-4f68-bb0d-6e6200c45fd7</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Tell me about this new tesla roadster <Word>
                    <Emphasis />
                    flying
                </Word> car. How much of it is hype. Can one actually do anything useful? Gosh, how much will it cost?
            </Paragraph>
        </Message>
        <Message
            at="2026-10-16T08:46:45.666135Z"
        >
            <Origin>3de68906-7559-4fb4-8182-7628e7ad71cd</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Used WebSearch</Action>
            <Action>Used WebSearch</Action>
            <Action>Used WebSearch</Action>
            <Paragraph>
                It's real in the sense that a Tesla actually left the ground at a live event yesterday. But "flying car" is
                mostly the stunt, and the stunt version isn't a car you can buy.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What happened
                </Word>
            </Paragraph>
            <Paragraph>
                The reveal took place near SpaceX's test site in McGregor, Texas, on the night of Thursday, October 15. The
                car drove up a curved ramp until it hung upside down, launched off the top, flipped and landed on cold-gas
                thrusters, then hopped over a Model 3, Model Y, Cybertruck, Semi and Cybercab. The flight hardware is
                simple. The thrusters run on about 600 liters of rechargeable compressed air, according to VP of Vehicle
                Engineering Lars Moravy. It is pressurized gas, not combustion, the same category of hardware SpaceX uses
                for attitude control during Falcon 9 booster landings.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The three versions
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Performance:
                    </Word> the normal car, with no thrusters. Electrek reported a listed 0–60 of under 1.6 seconds for it.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Thrust:
                    </Word> adds rear thrusters to help acceleration. Tesla says it reaches 97 km/h in under one second.
                    Despite the name, it doesn't fly.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Rocket:
                    </Word> the one that does the hops and hovers. Tesla's page lists it as "Invite Only" and "Not approved
                    for public road use." The flight system comes only with this version.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    How much is hype
                </Word>
            </Paragraph>
            <Paragraph>
                Most of the flying, but not all of the car. A quick estimate shows why the flight part can't be practical.
                Assume a car of about 2,000 kg plus the tanks. Hovering then takes roughly 20 kN of thrust. Compressed-air
                cold gas gets a specific impulse of about 50–70 s at sea level, so holding that thrust burns something like
                30–40 kg of air per second. Even at a few hundred bar, 600 L holds only around 150–250 kg of air, and thrust
                falls as tank pressure drops. That gives you seconds of hover, not a trip anywhere. The pressure numbers are
                my assumptions, not Tesla's, but the conclusion holds across any sensible range. It's an attitude-control
                and boost system, so jumps and flips are what it can do.
            </Paragraph>
            <Paragraph>
                Musk has more or less admitted the flying is about spectacle. On the record, he said it's "not necessarily a
                safety-optimized car." Earlier reporting found that the demo had missed at least eight internal deadlines.
                One critic quoted by Electrek said the thrusters add weight and cost and do nothing on a normal drive.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Can it do anything useful?
                </Word>
            </Paragraph>
            <Paragraph>
                The Rocket can't, beyond being a toy for a handful of invitees on private land. The Thrust version's
                possible real use is a sub-second 0–60, which is a party trick that needs a gas refill. The Performance car
                is the only actual product: an extremely fast two-seat EV. Tesla quotes range of more than 300 miles for at
                least one version.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What it will cost
                </Word>
            </Paragraph>
            <Paragraph>
                No one knows yet. Tesla gave no price for any version. It is taking reservations of $50,000 for the
                Performance model and $250,000 for the Thrust. The Performance deposit is due in stages: $5,000 immediately
                and a further $45,000 within 10 days, or the reservation lapses. For context, the 2017 base price was
                $200,000, so expect at least that for the base car and well above it for Thrust. Before the event, The
                Information reported that the limited thruster edition would likely cost hundreds of thousands of dollars,
                if not millions. The Rocket presumably sits at the "millions, if you're asked" end.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Timing:
                </Word> Musk said production will begin in 2028. This is a car first promised for 2020, so treat that date
                accordingly.
            </Paragraph>
            <Paragraph>Sources:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Reference>https://thenextweb.com/news/tesla-roadster-reveal-thrusters-2028</Reference>
                        The Next Web
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://eletric-vehicles.com/tesla/tesla-unveils-thruster-equipped-roadster-sets-production-for-2028/</Reference>
                        eletric-vehicles.com
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://applescoop.org/story/tesla-roadster-2026-reveal-flying-car-price-specs-release-date</Reference>
                        Apple Scoop
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://www.trendingtopics.eu/tesla-roadster-unveiled-flying-price-2028/</Reference>
                        Trending Topics
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://autos.yahoo.com/ev-and-future-tech/articles/tesla-flying-car-safe-musk-062119398.html</Reference>
                        Yahoo Autos (safety)
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://gulfnews.com/auto/news/tesla-rolls-out-insane-rocket-powered-flying-roadster-price-yet-unknown-1.500712565</Reference>
                        Gulf News
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://electrek.co/2026/08/14/tesla-flying-roadster-demo-this-month-no-driver/</Reference>
                        Electrek (Aug)
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://www.webull.ca/news-detail/15402037474960384</Reference>
                        Benzinga via Webull
                    </Word>
                </Line>
            </Paragraph>
        </Message>
        <Message
            at="2026-10-16T08:51:53.137900Z"
        >
            <Origin>0fee948b-41c2-41b4-bfed-538621827303</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Okay so this was just something to put Tesla back in the public imagination as a car company basically
            </Paragraph>
        </Message>
        <Message
            at="2026-10-16T08:52:02.628829Z"
        >
            <Origin>629149f6-a4ae-4d16-b02a-b72ffac751ad</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Largely, yes. It also works for a few other things at once.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Brand halo.
                </Word> A halo car exists to make people talk about the brand, not to sell volume, and Tesla's lineup has
                felt stale for a while. A car hopping over the Semi, Cybertruck and Cybercab is a neat visual of "we're
                still the future company," even if almost nobody will buy the thing doing the hopping.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    A Musk cross-promotion.
                </Word> The event was held at a SpaceX site, the thrusters were built with SpaceX engineers, and there's a
                SpaceX-branded edition. Now that SpaceX trades publicly, a joint spectacle helps both stocks' stories, not
                just Tesla's.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Cheap cash.
                </Word> Taking $50k–$250k deposits years before naming a price is effectively an interest-free loan from
                enthusiasts. It also gives a demand signal Tesla can point to. That's modest money at Tesla's scale, but it
                isn't nothing.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Settling an embarrassing promise.
                </Word> The Roadster had become a running joke about missed deadlines. Putting on a memorable show turns the
                story from "nine years late" into "it flew," at least for a news cycle.
            </Paragraph>
            <Paragraph>
                One caveat to "basically a car company": Tesla's own pitch to investors leans more on autonomy and robots
                than on cars these days. So the demo may be less about reviving the car-company identity than about keeping
                the "Musk does impossible engineering" aura alive, which the robotaxi and Optimus valuations depend on. A
                flying sports car is just a very photogenic way to sell that.
            </Paragraph>
        </Message>
        <Message
            at="2026-10-16T08:53:31.958154Z"
        >
            <Origin>f0af8b6a-7782-4031-96e1-97cf99a5c63b</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>So when does Tesla's first line of robots come out then</Paragraph>
        </Message>
        <Message
            at="2026-10-16T08:53:43.699823Z"
        >
            <Origin>c3c3a117-4831-4310-9b9c-097f5dad18de</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Used WebSearch</Action>
            <Paragraph>
                Not soon, at least for buying one. Musk's target for public sales is late 2027. Tesla hasn't confirmed that
                date and hasn't announced a price, purchase terms or a launch date.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Where things actually stand
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        The factory exists.
                    </Word> Tesla's July shareholder update said the Model S and X lines at Fremont were shut down and
                    first-generation Optimus lines are being installed in their place. Production was expected "later in
                    2026," with no start date or output schedule.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Output so far is reported, not official.
                    </Word> TechRepublic cites reports of a few dozen robots a week in Q2 and several hundred a week by
                    August. Teslarati mentions an internal goal of over 1,000 a week by year end. Tesla's own production
                    reports have never had an Optimus line item. You'll also see claims that mass production started on
                    January 21, 2026. Those trace back to a single third-party press release with no Tesla source.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        The first robots stay in-house.
                    </Word> They're meant for Tesla's internal training program, the "Optimus Academy," not for customers or
                    real factory work.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        The 2027 date has a condition.
                    </Word> At Davos in January, Musk said public sales might begin by the end of 2027, but only if
                    reliability, safety and functionality were good enough.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Price:
                </Word> The $20,000–$30,000 figure you hear is Musk's long-term consumer target. The ~$20,000 number is
                really a production-cost goal at a million units a year, not an announced price.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Track record:
                </Word> Musk once said production could start in 2023 and that robots would be doing useful work in Tesla
                factories in 2024. In January 2026 he said Optimus was still "in the R&amp;D phase" and not used in the
                factories in any material way.
            </Paragraph>
            <Paragraph>
                The next real data point is Tesla's Q3 earnings call on October 21. That's the most likely place for a
                price, an order process or real production numbers to show up, if any exist.
            </Paragraph>
            <Paragraph>Sources:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Reference>https://www.techrepublic.com/article/news-tesla-optimus-robot-production-2027-sales-timeline/</Reference>
                        TechRepublic
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://www.teslarati.com/elon-musk-tesla-optimus-for-sale-timeline/</Reference>
                        Teslarati
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://robotharbour.com/tesla-optimus-production-is-planned-for-2026-but-customers-will-have-to-wait/</Reference>
                        Robot Harbour
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://blog.robozaps.com/b/tesla-model-s-optimus-robot-factory-conversion</Reference>
                        Robozaps: production status
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://blog.robozaps.com/b/tesla-optimus-gen-3</Reference>
                        Robozaps: Gen 3
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://blog.robozaps.com/b/tesla-optimus-gen-2-review</Reference>
                        Robozaps: Gen 2 review
                    </Word>
                </Line>
                <Line>
                    <Word>
                        <Reference>https://optimusk.blog/blog/tesla-optimus-buy-preorder-2026/</Reference>
                        optimusk.blog
                    </Word>
                </Line>
            </Paragraph>
        </Message>
    </Chapter>
);
