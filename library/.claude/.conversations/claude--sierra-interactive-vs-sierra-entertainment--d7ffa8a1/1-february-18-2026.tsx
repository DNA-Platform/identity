import { Bold, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[18 February 2026](2026-02-18)</Date>
        </Dated>
        <Title>[[ 18 February 2026 ]]</Title>
        <Message
            at="2026-02-18T20:39:28.376120Z"
        >
            <Origin>019c727a-9e8b-7209-a1fa-677ff9b77615</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                What is the company Sierra interactive? Any relationship to the video game company that made quest for
                glory?
            </Paragraph>
        </Message>
        <Message
            at="2026-02-18T20:39:41.648322Z"
        >
            <Origin>019c727a-9e8b-7fda-b564-f76f751fba75</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Sierra Interactive and Sierra Entertainment (the video game company) are unrelated companies that happen to
                share the "Sierra" name.
            </Paragraph>
            <Action>Searched the web for “Sierra Interactive company”</Action>
            <Paragraph>
                <Word>
                    <Bold />
                    Sierra Interactive
                </Word> is a real estate software company that develops residential real estate software and services for
                agents, teams, and brokers in the U.S. and Canada. It was founded in 2007 by Ben Peskoe and is headquartered
                in Louisville, Kentucky. Their platform includes IDX websites, a back-end CRM, and lead generation services.
                In 2022, Sierra Interactive was acquired by ASG, a portfolio company of Alpine Investors that buys and
                builds vertical SaaS companies.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    No relationship to the video game company.
                </Word> Sierra Entertainment (originally Sierra On-Line), founded by Ken and Roberta Williams, made Quest
                for Glory, King's Quest, Space Quest, Leisure Suit Larry, and many other classic adventure games. It's a
                completely different company — just a name coincidence. Sierra Entertainment went through various corporate
                owners (CUC/Cendant, Havas, Vivendi) and the brand is now owned by Activision Blizzard (Microsoft).
            </Paragraph>
        </Message>
        <Message
            at="2026-02-18T20:40:31.799026Z"
        >
            <Origin>019c727b-95cc-7f6e-836a-6f7f73387859</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Do you know who cindy lang is? She works for them as a product manager. How big of a company are they?
                What’s their revenue? What’s their profit?
            </Paragraph>
        </Message>
        <Message
            at="2026-02-18T20:40:49.129272Z"
        >
            <Origin>019c727b-95cc-7989-89f2-17ac641db0f3</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Based on the search results I already have, here's what I know about Sierra Interactive's size:
            </Paragraph>
            <Action>Searched the web for “Cindy Lang Sierra Interactive product manager”</Action>
            <Paragraph>
                You might be thinking of <Word>
                    <Bold />
                    Cindy Liang
                </Word> (not Lang). She's a Senior Product Manager at Sierra Interactive, with extensive product management
                experience across software, e-commerce, consumer electronics, CRM, retail, insurance, and advertising. She
                holds an MBA from IE Business School. Before Sierra Interactive, she held senior PM roles at ezCater,
                Vivint, and Kitewheel. She joined Sierra Interactive in 2024 and is based in Cambridge, MA.
            </Paragraph>
            <Paragraph>As for the company's size and financials:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Employees:
                    </Word> Approximately 57 employees across 3 continents (though the 2022 acquisition announcement cited
                    85+ team members — the number may have fluctuated).
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Revenue:
                    </Word> Annual revenue is estimated at around $15M. Other sources put it in the $10-50M range.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Profit:
                    </Word> Since Sierra Interactive is privately held (now owned by ASG/Alpine Investors), they don't
                    publicly disclose profit figures. However, their job postings notably described the company as
                    "self-funded, financially independent, profitable, and high growth" prior to the acquisition.
                </Line>
            </Paragraph>
            <Paragraph>
                So it's a relatively small, profitable SaaS company — not a mega-enterprise. Is this someone you're
                potentially working with, or are you evaluating their platform?
            </Paragraph>
        </Message>
    </Chapter>
);
