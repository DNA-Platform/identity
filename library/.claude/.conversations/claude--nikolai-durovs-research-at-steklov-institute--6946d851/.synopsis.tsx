import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user engaged in an extensive analytical discussion about the potential attribution of Bitcoin's creation
            to Nikolai Durov, co-founder of VK and Telegram. The conversation centered around what the user termed the
            "role-playing game analogy" - the premise that cryptocurrency would naturally be designed by someone who
            already had a social platform that needed state-resistant currency, rather than being created in isolation.
            The user argued that this filter dramatically narrows the pool of potential Bitcoin creators to those who
            were simultaneously building social platforms, facing state-level adversaries, and possessed both
            cryptographic knowledge and awareness of cypherpunk concepts.
        </Paragraph>
    </Chapter>
);
