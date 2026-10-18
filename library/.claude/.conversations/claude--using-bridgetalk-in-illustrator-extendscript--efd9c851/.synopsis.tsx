import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            I am working with ExtendScript in Illustrator and I need to build an abstraction around BridgeTalk. Can you
            teel me how to to use BridgeTalk?
        </Paragraph>
    </Chapter>
);
