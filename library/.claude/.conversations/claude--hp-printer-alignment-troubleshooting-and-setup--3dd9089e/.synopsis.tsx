import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person was troubleshooting an HP Smart Tank 582 printer, with two main goals: resolving a stuck
            printhead alignment issue and setting up the printer on their computer. Claude researched official HP
            documentation and walked through the alignment process in detail, explaining that the printer prints an
            alignment page which must then be placed face-down on the scanner glass and scanned by pressing the lit copy
            button.
        </Paragraph>
    </Chapter>
);
