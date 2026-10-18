import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user is developing an innovative React framework called Chemistry that fundamentally reimagines React's
            programming model. Chemistry retains React's strengths (JSX and one-way data flow) while replacing the
            functional programming paradigm with object-oriented programming using classes, inheritance, and reactive
            properties. The framework uses creative JavaScript dynamism to achieve features that shouldn't be possible -
            implementing a dual constructor system, automatic property binding through descriptors, and state tracking
            through property access interception.
        </Paragraph>
    </Chapter>
);
