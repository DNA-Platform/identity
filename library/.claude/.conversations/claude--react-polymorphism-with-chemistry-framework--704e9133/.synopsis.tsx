import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user is developing a React framework called "Chemistry" that replaces React's functional components and
            hooks with a classical object-oriented programming model. The framework removes everything from React except
            JSX/TSX, managing state through an object graph where components are classes extending $Chemical. The user
            demonstrated deep expertise in both React internals and TypeScript, showing a preference for extremely
            concise, semantically-organized code with whole words over abbreviations (except for "cid" for chemical ID).
        </Paragraph>
    </Chapter>
);
