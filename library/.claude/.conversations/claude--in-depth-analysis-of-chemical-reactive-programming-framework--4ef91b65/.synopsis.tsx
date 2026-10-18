import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Please review every method of the framework carefully, understanding it in depth and looking for the nuances
            that make it work
        </Paragraph>
    </Chapter>
);
