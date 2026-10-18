import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user is developing "Chemistry," an innovative React framework that treats components as reactive objects
            called "Chemicals" that can bond together through a sophisticated binding system. The conversation focused
            extensively on TypeScript type system design and React component architecture as the user worked through
            complex technical challenges in building this framework.
        </Paragraph>
    </Chapter>
);
