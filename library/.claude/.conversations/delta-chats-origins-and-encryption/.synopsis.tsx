import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked two factual questions about Delta Chat: who invented it and where its encryption comes
            from. Claude provided a detailed informational response covering the app's origins and technical
            architecture.
        </Paragraph>
    </Chapter>
);
