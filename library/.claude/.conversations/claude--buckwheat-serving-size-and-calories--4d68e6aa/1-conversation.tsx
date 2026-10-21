import { Bold, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[4 August 2026](2026-08-04)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-08-04T12:44:16.202154Z"
        >
            <Origin>019fccce-8b92-7f64-9d6d-3d2bee98c77b</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                What are the calories for a serving of buckwheat and give me a clear sense of size so I can know that that’s
                what I’m eating
            </Paragraph>
        </Message>
        <Message
            at="2026-08-04T12:44:20.426958Z"
        >
            <Origin>019fccce-8b93-75d0-a706-7ef01b3370cd</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                A standard serving is about 1 cup cooked buckwheat (groats/kasha), which is roughly 155–170 calories. One
                cup cooked weighs about 168 g and looks like a baseball-sized mound, or roughly the size of your closed
                fist.
            </Paragraph>
            <Paragraph>
                The key thing to watch: that comes from about ¼ cup (45 g) dry groats, which is around 145–155 calories
                before cooking. Buckwheat roughly triples in volume as it absorbs water. So if you're measuring dry, ¼ cup
                dry ≈ 1 cup cooked ≈ ~150 calories either way.
            </Paragraph>
            <Paragraph>
                If you're eyeballing a bowl of cooked grechka: a typical generous plate serving is closer to 1.5 cups
                cooked, so ~230–250 calories.
            </Paragraph>
        </Message>
        <Message
            at="2026-08-04T12:45:32.539883Z"
        >
            <Origin>019fcccf-bba3-7064-8862-02cc29c37806</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>How does it compare to white rice</Paragraph>
        </Message>
        <Message
            at="2026-08-04T12:45:36.940685Z"
        >
            <Origin>019fcccf-bba4-7292-8983-5ddc14cb07de</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Nearly identical per cup cooked. White rice is ~205 calories per cup cooked (158 g), buckwheat ~155–170 — so
                rice runs slightly higher, mostly because it packs a bit denser and has less water content per cup.
            </Paragraph>
            <Paragraph>Where they differ meaningfully:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Fiber
                    </Word>: buckwheat ~4.5 g per cup vs white rice ~0.6 g
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Protein
                    </Word>: buckwheat ~5.7 g vs rice ~4.3 g, and buckwheat's protein is more complete (contains lysine,
                    which rice lacks)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Glycemic index
                    </Word>: buckwheat ~45–55 vs white rice ~70–75, so noticeably slower blood sugar rise
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Micronutrients
                    </Word>: buckwheat is much richer in magnesium, manganese, and rutin
                </Line>
            </Paragraph>
            <Paragraph>
                So calorie-wise it's basically a wash — the practical difference is that a cup of buckwheat is more filling
                and digests more slowly than the same calories of white rice.
            </Paragraph>
        </Message>
    </Chapter>
);
