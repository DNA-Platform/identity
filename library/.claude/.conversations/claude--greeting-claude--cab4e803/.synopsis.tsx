import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Ana is traveling in Batumi, Georgia (the country) with a companion named Doug. She asked Claude to research
            and explain Georgian traffic law regarding blood alcohol limits for drivers — how the limit is measured, how
            it compares to Russia and the US, and what the penalties are. The conversation was conducted in Russian,
            with a final deliverable requested in English for Doug.
        </Paragraph>
    </Chapter>
);
