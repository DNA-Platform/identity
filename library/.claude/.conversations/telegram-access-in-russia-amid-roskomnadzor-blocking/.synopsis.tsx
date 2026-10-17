import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user Doug engaged Claude in reconstructing a complex investigative thesis about cryptocurrency
            development that spans multiple previous conversations. Doug demonstrated how he uses web searches as a form
            of persistent memory to guide Claude through rediscovering connections between key figures in the
            cryptocurrency space. The central investigation focuses on potential hidden architectures behind major
            blockchain projects, particularly examining capability gaps between public founders and the technical
            sophistication of their outputs.
        </Paragraph>
    </Chapter>
);
