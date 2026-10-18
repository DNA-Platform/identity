import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug is developing the $Chemistry framework, a revolutionary React framework that reimagines component
            architecture by treating JSX children as constructor arguments and enabling true object-oriented programming
            patterns. The framework embraces JavaScript's dynamic nature as a feature rather than a flaw, using semantic
            transfer from chemistry concepts like bonds, reactions, and catalysts as actual implementation patterns.
            Doug views programming as art, where code aesthetics matter as much as functionality, and the framework is
            designed for a post-automation future where human purpose is creative expression rather than productivity.
        </Paragraph>
    </Chapter>
);
