import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked Claude to think step by step and then answer concisely about whether P equals NP and what
            the strongest evidence is either way. This is a single-exchange theoretical computer science question with
            no personal details shared about the person's role, background, or preferences.
        </Paragraph>
    </Chapter>
);
