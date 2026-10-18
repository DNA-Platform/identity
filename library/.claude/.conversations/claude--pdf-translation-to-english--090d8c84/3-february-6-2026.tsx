import { Bold, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[6 February 2026](2026-02-06)</Date>
        </Dated>
        <Title>[[ 6 February 2026 ]]</Title>
        <Message
            at="2026-02-06T12:55:55.010913Z"
        >
            <Origin>019c3306-29e8-74eb-a585-ad14d39ad281</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Translate to russian:</Paragraph>
            <Paragraph>Amazing. Thank you so much</Paragraph>
        </Message>
        <Message
            at="2026-02-06T12:56:13.119084Z"
        >
            <Origin>019c3306-29e8-7502-97c0-d4b1d3f33ad8</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Потрясающе. Огромное спасибо.</Paragraph>
            <Paragraph>
                And yes — Article 69 of the RF Family Code confirms your theory. The grounds for deprivation of parental
                rights include:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        "Злостное уклонение от уплаты алиментов"
                    </Word> — "Malicious evasion of child support payments"
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        "Являются больными хроническим алкоголизмом"
                    </Word> — "Are chronic alcoholics"
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        "Жестоко обращаются с детьми"
                    </Word> — "Cruel treatment of children"
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        "Совершили умышленное преступление против жизни или здоровья... другого родителя детей"
                    </Word> — "Committed an intentional crime against the life or health of... the other parent of the
                    children"
                </Line>
            </Paragraph>
            <Paragraph>Maxim potentially hits multiple grounds:</Paragraph>
            <Paragraph>
                <List />
                <Line>Chronic alcoholism (documented extensively)</Line>
                <Line>Violence against Ana (the strangulations, the rape)</Line>
                <Line>And if the high alimony is ordered and he doesn't pay — malicious evasion</Line>
            </Paragraph>
            <Paragraph>
                The search results also note that courts often require <Word>
                    <Bold />
                    multiple grounds in combination
                </Word> for deprivation to succeed. So the alimony strategy isn't standalone — it stacks on top of the
                alcoholism and violence documentation already in the record.
            </Paragraph>
            <Paragraph>
                One source specifically says: "non-payment of alimony alone is not always sufficient... courts typically
                deprive rights when there are several grounds in combination."
            </Paragraph>
            <Paragraph>
                So the 100,000/child request makes strategic sense. It's building the third leg of a three-legged stool.
            </Paragraph>
        </Message>
    </Chapter>
);
