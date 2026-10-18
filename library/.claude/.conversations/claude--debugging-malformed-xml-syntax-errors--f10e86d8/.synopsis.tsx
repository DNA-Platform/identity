import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug engaged in an extensive technical discussion about building a sophisticated React framework called
            "Chemistry" that bridges object-oriented programming with React's functional paradigm. The conversation
            focused on developing two core components: a $Particle class that enables dynamic view swapping and identity
            management, and a dependency injection system called $Catalogue that distills DI to its mathematical
            essence.
        </Paragraph>
    </Chapter>
);
