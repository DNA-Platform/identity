import { Bold, Chapter, Date, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[15 September 2026](2026-09-15)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-09-15T13:01:43.244232Z"
        >
            <Origin>01a0a528-c4af-7a64-b782-c1be0e426f19</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Is the clarity act now unlikely to pass because that was a big one for cryptocurrency right?
            </Paragraph>
        </Message>
        <Message
            at="2026-09-15T13:02:07.574060Z"
        >
            <Origin>01a0a528-c4af-7f90-9934-4a91c3866020</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “CLARITY Act Senate market structure bill status”</Action>
            <Action>Searched the web for “Clarity Act cloture vote September 2026”</Action>
            <Action>Searched the web for “Clarity Act Schumer Democrats ethics deal cloture today”</Action>
            <Action>Searched the web for “Senate Clarity Act cloture vote result fails OR advances”</Action>
            <Paragraph>
                Yes, it's in serious trouble, and today is the decisive moment: the Senate has scheduled a cloture vote on
                the motion to proceed for 2:15 p.m. ET today, September 15. I couldn't find a result yet. This isn't final
                passage; it's a procedural vote needing 60 senators just to open floor debate, and failing it kills the bill
                for 2026 and, given midterm politics, likely until 2029.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Odds going in.
                </Word> Polymarket odds for the bill becoming law in 2026 fell from 82% in February to 16% as of September
                6, and Galaxy Research put it at 10%. Over the weekend there was a late push. Sponsors released a final
                substitute they called their "last, best and final" offer, incorporating 126 changes Democrats had
                requested. Trump agreed to ethics terms that bar officials, judges, and spouses from issuing or sponsoring
                digital assets and require divestment or blind trusts. Forbes reported this roughly doubled the market odds,
                to about 35%.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Why it still looks hard.
                </Word> Republicans hold 53 seats and need Democratic votes. Democrats weren't satisfied. They sent a
                counterproposal hours before the vote. Warner said the ethics provision wasn't "near enough." Warren's staff
                argued that state AG enforcement is a mirage because only DOJ has real power, and Collins and Cornyn were
                undecided because of bank concerns about deposit flight from stablecoin yields. On September 14, 18 state
                attorneys general led by Letitia James also urged Congress to reject the bill.
            </Paragraph>
            <Paragraph>
                The margin will be informative even if it fails. One analysis suggested a narrow miss (57 to 59) points to a
                bill that could pass with minor amendments in 2027, while a wide miss (below 55) signals deep structural
                opposition. I can check back for the tally once it's reported.
            </Paragraph>
        </Message>
    </Chapter>
);
