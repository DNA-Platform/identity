import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person engaged Claude in a sustained philosophical and practical investigation into the natural-language
            semantics of four related terms: "kind," "type," "category," and "subject." The explicit purpose was not
            abstract word study but applied: the person is building a formalism called Semantic Reference Theory (SRT),
            described as a first-order logic whose domain is referents. The goal was to establish canonical semantics
            for these terms grounded in natural usage rather than mathematical convention, identifying which terms can
            be treated synonymously, which deserve distinct primitives, and which word should be chosen as canonical
            when terms overlap.
        </Paragraph>
    </Chapter>
);
