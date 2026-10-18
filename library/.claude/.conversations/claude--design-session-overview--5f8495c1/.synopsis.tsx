import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user continued developing their Chemistry framework, a React-based system that brings object-oriented
            programming to React components. This session focused on debugging and fixing critical issues with
            constructor bonding and asynchronous operations. The user encountered an infinite loop error caused by React
            fragments being stored in variables and reused across renders, which broke Chemistry's component
            instantiation process. Through systematic debugging, they identified that Chemistry requires children to be
            defined inline rather than stored in variables, as the framework needs to intercept JSX creation to build
            proper Chemical instance graphs.
        </Paragraph>
    </Chapter>
);
