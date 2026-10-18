import { Bold, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[1 February 2026](2026-02-01)</Date>
        </Dated>
        <Title>[[ 1 February 2026 ]]</Title>
        <Message
            at="2026-02-01T22:21:53.822548Z"
        >
            <Origin>019c1b4c-7be5-7f57-a904-ec3b1e0579b3</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Does Tbilisi have convenience atores open 24/7?</Paragraph>
        </Message>
        <Message
            at="2026-02-01T22:22:11.845848Z"
        >
            <Origin>019c1b4c-7be5-7e51-a3f3-27a04e6021bb</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Tbilisi 24 hour convenience stores”</Action>
            <Paragraph>Yes, Tbilisi has solid 24/7 options:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Physical stores open 24 hours:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        SPAR
                    </Word> and <Word>
                        <Bold />
                        Nikora
                    </Word> (purple sign with a bull's head) are moderately priced and normally open 24 hours. SPAR has an
                    extensive network across different neighborhoods.
                </Line>
                <Line>Note that SPAR doesn't always stock fresh produce.</Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    24/7 delivery:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        IOLI
                    </Word> operates as an online supermarket 24/7 with 4000+ products, delivered in less than 30 minutes
                    via Wolt. They have locations across multiple neighborhoods including Saburtalo, Vazha-Pshavela,
                    Varketili, and Didi Dighomi.
                </Line>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Other useful stores (not necessarily 24/7):
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        2Nabiji
                    </Word> is a very affordable option that tends to stock budget ranges.
                </Line>
                <Line>
                    Tbilisi is filled with small stores—even chain stores are small convenience stores (like 7-11) or mini
                    grocery stores. Many neighborhoods have clusters of small shops for produce, meat, bread, etc.
                </Line>
            </Paragraph>
            <Paragraph>
                Given your mobility limitations with the surgery recovery, the Wolt/IOLI 24/7 delivery option might be
                particularly useful.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Fact:
                </Word> The Georgian word "tone" (ტონე) refers to the traditional cylindrical clay oven used for baking
                bread since at least the 12th century—archaeologists found them in the Vardzia cave monastery complex.
            </Paragraph>
        </Message>
    </Chapter>
);
