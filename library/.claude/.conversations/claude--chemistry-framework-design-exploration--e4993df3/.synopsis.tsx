import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user engaged in an extensive technical discussion about their JavaScript/TypeScript framework called
            Chemistry, which provides an object-oriented alternative to React's functional programming paradigm.
            Chemistry uses a $ naming convention to denote reactive properties and methods, implements a template system
            for component instances, and features a bond system for property reactivity. The conversation began with the
            user teaching Claude about Chemistry's architecture and philosophy, then evolved into collaborative
            problem-solving as they worked through implementing several advanced features.
        </Paragraph>
    </Chapter>
);
