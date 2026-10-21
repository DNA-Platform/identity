import { Bold, Chapter, Emphasis, Heading, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-04-08T12:46:08.243093Z"
        >
            <Origin>019d6d21-8e8a-76ab-b1cb-2ccc3915f526</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                How does the electoral college work in the United States and what motivates the people in it to vote with
                whomever the state support supports?
            </Paragraph>
        </Message>
        <Message
            at="2026-04-08T12:46:21.598400Z"
        >
            <Origin>019d6d21-8e8a-7f09-a486-b3f2e9a0d33b</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Heading>The Electoral College</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    Structure
                </Word>
            </Paragraph>
            <Paragraph>
                Each state gets a number of electors equal to its total Congressional representation — its House seats
                (based on population) plus its two Senate seats. DC gets 3 electors via the 23rd Amendment. The total is
                538, and a candidate needs 270 to win.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    How it works
                </Word>
            </Paragraph>
            <Paragraph>
                When voters cast ballots in a presidential election, they're technically voting for a slate of electors
                pledged to that candidate. After Election Day, the winning candidate's electors in each state convene in
                their state capital in December and cast the official electoral votes. Congress certifies the count in early
                January.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Winner-take-all vs. proportional
                </Word>
            </Paragraph>
            <Paragraph>
                48 states use a winner-take-all system — whichever candidate wins the popular vote in that state gets <Word>
                    <Emphasis />
                    all
                </Word> of its electors. Maine and Nebraska are exceptions: they allocate two electors to the statewide
                winner and one per congressional district.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What motivates electors to vote as expected
                </Word>
            </Paragraph>
            <Paragraph>
                Electors are chosen by state parties and are typically loyal party activists, donors, or officials — people
                who are deeply committed to their candidate before they're ever selected. So the selection process itself is
                the primary filter.
            </Paragraph>
            <Paragraph>Beyond that, there are legal mechanisms in most states:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        33 states plus DC
                    </Word> have laws requiring electors to vote for the candidate they're pledged to.
                </Line>
                <Line>
                    The Supreme Court upheld the constitutionality of these "faithless elector" laws in <Word>
                        <Emphasis />
                        Chiafalo v. Washington
                    </Word> (2020), meaning states <Word>
                        <Emphasis />
                        can
                    </Word> enforce pledges and even replace or fine electors who defect.
                </Line>
                <Line>
                    In states without such laws, electors are legally free to vote for anyone, though it almost never
                    happens consequentially.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Faithless electors in practice
                </Word>
            </Paragraph>
            <Paragraph>
                They're rare but not unheard of — 2016 had 7 faithless electors, the most in modern history. It has never
                changed the outcome of a presidential election.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The core tension
                </Word>
            </Paragraph>
            <Paragraph>
                The system means a candidate can lose the national popular vote but win the presidency by carrying the right
                combination of states — which has happened five times in US history, most recently in 2000 and 2016. This is
                the central ongoing debate about whether the Electoral College reflects democratic principles or distorts
                them.
            </Paragraph>
        </Message>
        <Message
            at="2026-04-08T12:48:26.067454Z"
        >
            <Origin>019d6d23-a765-73f2-a09d-4cc6a5129840</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>So in 2016 what did the faithless electors do and did they get in trouble?</Paragraph>
        </Message>
        <Message
            at="2026-04-08T12:48:39.664704Z"
        >
            <Origin>019d6d23-a765-7369-a299-00d5e8e86e6b</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Heading>2016 Faithless Electors</Heading>
            <Paragraph>
                <Word>
                    <Bold />
                    The numbers
                </Word>
            </Paragraph>
            <Paragraph>
                7 electors defected total — 5 from Hillary Clinton and 2 from Donald Trump. It was the largest faithless
                elector count in over a century.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    What they voted for instead
                </Word>
            </Paragraph>
            <Paragraph>Clinton's defectors (all in Washington state, plus one in Hawaii):</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    3 Washington electors voted for <Word>
                        <Bold />
                        Colin Powell
                    </Word>
                </Line>
                <Line>
                    1 Washington elector voted for <Word>
                        <Bold />
                        Faith Spotted Eagle
                    </Word> (a Native American elder and activist — the first Indigenous person to receive an electoral
                    vote)
                </Line>
                <Line>
                    1 Hawaii elector voted for <Word>
                        <Bold />
                        Bernie Sanders
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>Trump's defectors (both in Texas):</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    1 voted for <Word>
                        <Bold />
                        John Kasich
                    </Word>
                </Line>
                <Line>
                    1 voted for <Word>
                        <Bold />
                        Ron Paul
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>
                There was also a Minnesota elector who attempted to vote for Sanders but was immediately replaced under
                state law before the vote counted.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Consequences
                </Word>
            </Paragraph>
            <Paragraph>
                At the time, the legal landscape was murky. Washington state fined its four faithless electors <Word>
                    <Bold />
                    $1,000 each
                </Word>. Those electors challenged the fines in court, arguing states had no constitutional authority to
                bind them.
            </Paragraph>
            <Paragraph>
                That legal challenge wound its way up to the Supreme Court, which ruled in <Word>
                    <Bold />
                    Chiafalo v. Washington (2020)
                </Word> — unanimously — that states <Word>
                    <Emphasis />
                    can
                </Word> legally enforce elector pledges and penalize or replace defectors. So the Washington fines were
                ultimately upheld.
            </Paragraph>
            <Paragraph>The Texas defectors faced no penalty because Texas had no enforcement law at the time.</Paragraph>
        </Message>
    </Chapter>
);
