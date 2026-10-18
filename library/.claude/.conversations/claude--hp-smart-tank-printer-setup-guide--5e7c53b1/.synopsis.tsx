import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person was setting up a new HP Smart Tank 5890 series printer and sought step-by-step guidance
            throughout the entire process, explicitly stating they were "too lazy to read the instructions." The
            conversation covered the full printer setup sequence: understanding the role of the printhead versus ink
            bottles, installing the printhead into the carriage, filling the four ink tanks (yellow, magenta, cyan,
            black), loading paper into the correct input tray, and completing the mandatory printhead alignment scan.
        </Paragraph>
    </Chapter>
);
