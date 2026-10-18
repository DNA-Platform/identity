import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug engaged in an extensive technical discussion about building a sophisticated TypeScript reflection
            system for his $Chemistry framework, which serves as both a practical React library and an artistic
            exploration of programming language semantics. Doug is developing what he calls Semantic Reference Theory
            (SRT), a theory of consciousness that he plans to publish through a self-updating GitHub/Zenodo publication.
            The reflection system represents his attempt to formally describe the relationship between TypeScript's type
            system and JavaScript's runtime behavior.
        </Paragraph>
    </Chapter>
);
