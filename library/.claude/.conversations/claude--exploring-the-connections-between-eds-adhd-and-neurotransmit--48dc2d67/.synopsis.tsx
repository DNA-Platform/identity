import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            What is EDS? What kind of physical condition is it? Could it be connected to ADHD, or high dopamine states
            or persistent GABA instability from anxiety?
        </Paragraph>
    </Chapter>
);
