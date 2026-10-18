import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person submitted a brief translation request, asking Claude to translate text from Georgian into
            English. The text in question was a short sign or notice. Claude identified it as a Georgian-language
            parking notice and provided the English translation: "Don't park your car at the entrance!" along with the
            original Georgian script and a literal breakdown of the phrasing. The conversation was a single-exchange
            translation task with no additional context, preferences, or follow-up provided by the person.
        </Paragraph>
    </Chapter>
);
