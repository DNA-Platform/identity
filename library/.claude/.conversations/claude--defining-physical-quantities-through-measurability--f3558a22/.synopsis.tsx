import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            I have an idea. I think it may have interesting ramifications. It comes in the form of a meta-scientific
            axiom, which states that physical quantities must be measurable in some sense, and so they must be
            well-defined in the language they are described. Non-physical quantities can be useful, and it may employ
            mathematics that causes things to be infinite or undefined at times. But these things are not true physical
            quantities. This meta scientific axiom gets at the heart of what is real
        </Paragraph>
    </Chapter>
);
