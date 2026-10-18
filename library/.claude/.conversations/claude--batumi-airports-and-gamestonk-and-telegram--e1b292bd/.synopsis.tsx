import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user, a former hedge fund owner with expertise in adversarial reasoning under uncertainty, engaged in a
            sophisticated analysis connecting flight cancellations from Batumi to Moscow with broader geopolitical and
            investment implications. The conversation began with the user questioning why flights between these cities
            face frequent delays despite seemingly minor weather conditions, leading to a deep investigation into
            Russian infrastructure problems and their connection to a personal investment thesis about Telegram.
        </Paragraph>
    </Chapter>
);
