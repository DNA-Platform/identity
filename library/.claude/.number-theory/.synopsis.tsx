import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            An exploration into a framework that helps give meaning to the unsolved prime number theorems while
            simultaneously asking "what is the semantic commitment we are making by admitting an unprovable universal
            quantification that leads to w-inconsistency into PA, Q and related formalisms as an axiom?"
        </Paragraph>
    </Chapter>
);
