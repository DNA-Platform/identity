import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person is a computational neuroscientist consulting at a neuroscience lab at Baylor College of Medicine.
            They hold a master's degree in computational neuroscience and have a publication in Nature Neuroscience.
            They asked Claude to research appropriate job title options for their consultancy role, with specific
            constraints: avoid claiming credentials they don't hold, capture the substantive nature of the work, and not
            interpolate beyond what research supports.
        </Paragraph>
    </Chapter>
);
