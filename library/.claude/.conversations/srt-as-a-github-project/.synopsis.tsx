import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug is building Semantic Reference Theory (SRT), a first-order formal theory he has been developing for
            over a year, and this conversation ranged across several interconnected areas: the current state of AI
            mathematical reasoning (comparing OpenAI's o-series models, dedicated math systems like Harmonic's
            Aristotle, and Anthropic's Claude), the philosophy and methodology of theory-building as distinct from proof
            development, a rich philosophical arc through mathematical logic and foundations, and finally practical
            GitHub repository design for SRT as a potential open-source project.
        </Paragraph>
    </Chapter>
);
