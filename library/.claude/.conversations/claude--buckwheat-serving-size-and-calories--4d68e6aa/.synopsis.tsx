import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked about the caloric content of buckwheat, requesting both a precise calorie count and a clear
            visual/physical reference for what a standard serving looks like in practice. Claude provided that a
            standard serving is approximately 1 cup cooked (168 g, roughly the size of a closed fist or baseball-sized
            mound) at around 155–170 calories, and clarified the dry-to-cooked volume conversion: ¼ cup dry groats
            triples in volume when cooked, yielding approximately the same calorie count either way. Claude also noted
            that a more generous plate serving of 1.5 cups cooked runs closer to 230–250 calories.
        </Paragraph>
    </Chapter>
);
