import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The conversation consisted of translation assistance between English and Turkish. The person asked Claude to
            translate several messages in both directions — from English to Turkish and from Turkish to English.
        </Paragraph>
    </Chapter>
);
