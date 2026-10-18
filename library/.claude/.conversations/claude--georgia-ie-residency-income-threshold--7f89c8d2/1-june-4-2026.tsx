import { Bold, Chapter, Date, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[4 June 2026](2026-06-04)</Date>
        </Dated>
        <Title>[[ 4 June 2026 ]]</Title>
        <Message
            at="2026-06-04T10:47:06.900214Z"
        >
            <Origin>019e923e-a0c4-7e54-881e-923274946145</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                For IE residency in georgia how much in gel do you need to make in a year? 50K? Is it profit or revenue? I
                assume its the amount that’s taxed
            </Paragraph>
        </Message>
        <Message
            at="2026-06-04T10:47:35.811601Z"
        >
            <Origin>019e923e-a0c4-752d-ac62-f28b75348de2</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Let me verify this rather than work from memory — the thresholds and the revenue-vs-profit distinction are
                exactly where being wrong matters.
            </Paragraph>
            <Action>
                Searched the web for “Georgia work residence permit individual entrepreneur income threshold GEL turnover”
            </Action>
            <Paragraph>
                Short answer: <Word>
                    <Bold />
                    50,000 GEL, and it's revenue (turnover), not profit.
                </Word>
            </Paragraph>
            <Paragraph>
                The threshold for a work/business TRP as an IE is income from entrepreneurial activities reaching 50,000 GEL
                within 12 consecutive months — explicitly defined as turnover: income from the sale of goods, provision of
                services, or completion of work. Multiple sources are consistent on this being gross turnover, confirmed by
                a Revenue Service certificate or bank statement, not net profit.
            </Paragraph>
            <Paragraph>
                Your instinct that it's "the amount that's taxed" is actually right, just by a different mechanism than
                profit. Under the 1% small-business regime, tax is levied on annual turnover, not profit. So the 50K
                turnover figure and the tax base are the same number — gross receipts. There's no profit calculation
                anywhere in this; deductions don't enter into it.
            </Paragraph>
            <Paragraph>Two things to flag, both in the "verify before relying" column:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The 50K requirement may be in flux as of right now.
                </Word> One source reports that the April 2026 amendments removed the 50,000 GEL turnover requirement from
                the statute, with new (loosened) criteria being codified in a Government Ordinance that hasn't been
                published yet — and until it is, the existing process remains in effect. So 50K is still the operative
                number today, but it's actively being rewritten. Worth confirming current status with ExpatHub or an
                accountant before timing anything around it.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    There's also a separate monthly personal-income test
                </Word> on top of turnover: monthly personal income of more than five times the subsistence minimum, roughly
                1,250 GEL (other sources cite ~1,500). That's a distinct requirement from the 50K annual turnover.
            </Paragraph>
            <Paragraph>
                Since this is Ana's actual IE situation (DNA, 305861868), the cleanest move is to confirm the
                post-April-2026 thresholds directly before she relies on the 50K figure — the statute is mid-change and I
                can't verify what the unpublished Ordinance will say.
            </Paragraph>
        </Message>
    </Chapter>
);
