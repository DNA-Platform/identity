import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user engaged in an extensive technical discussion about building a sophisticated TypeScript framework
            called "Chemistry" for React applications. This framework aims to provide strongly-typed JSX children based
            on constructor parameters, using advanced TypeScript type manipulation techniques. The conversation focused
            heavily on creating type-safe component composition where constructor parameters automatically define what
            children a component can accept, with the goal of achieving compile-time type checking for JSX structures.
        </Paragraph>
    </Chapter>
);
