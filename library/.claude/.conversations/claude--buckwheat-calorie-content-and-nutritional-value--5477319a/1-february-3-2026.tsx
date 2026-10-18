import { Bold, Chapter, Date, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[3 February 2026](2026-02-03)</Date>
        </Dated>
        <Title>[[ 3 February 2026 ]]</Title>
        <Message
            at="2026-02-03T06:44:39.953475Z"
        >
            <Origin>019c223f-285f-7f56-8b10-a7f780fe5779</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>What is the calorie count of buckwheat? Is it low calorie</Paragraph>
        </Message>
        <Message
            at="2026-02-03T06:44:47.494232Z"
        >
            <Origin>019c223f-285f-7d46-93a5-d4c461791366</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Buckwheat contains approximately <Word>
                    <Bold />
                    340-360 calories per 100g
                </Word> of raw groats, which is similar to other whole grains like rice, oats, and quinoa.
            </Paragraph>
            <Paragraph>
                When cooked, it comes out to roughly <Word>
                    <Bold />
                    90-100 calories per 100g
                </Word> (since it absorbs water and expands).
            </Paragraph>
            <Paragraph>
                So it's not particularly low-calorie compared to other grains—it's pretty standard. However, buckwheat has
                some advantages that make it feel more satisfying relative to its calories: it's high in fiber and protein
                (about 13g protein per 100g dry), which can help with satiety. It also has a lower glycemic index than many
                grains, meaning it won't spike blood sugar as sharply.
            </Paragraph>
            <Paragraph>
                If you're looking for lower-calorie grain alternatives, cauliflower rice (~25 cal/100g) or shirataki noodles
                (~10 cal/100g) are dramatically lower, though nutritionally quite different.
            </Paragraph>
        </Message>
    </Chapter>
);
