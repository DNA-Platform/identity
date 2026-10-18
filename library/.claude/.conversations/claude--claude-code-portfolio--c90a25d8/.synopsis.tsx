import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Настя is working on a web-based map generation application originally built by a collaborator named Doug
            (Даг) using Claude Code. The application generates stylized mosaic maps with configurable parameters (cell
            size, irregularity, organic feel, street width, color palettes, seeds, etc.) and includes a portfolio system
            for saving and navigating map configurations as JSON settings. Настя's goal is to continue developing the
            application independently, creating new map variations and features, but she initially struggled to
            understand Doug's prompting methodology when working with Claude Code.
        </Paragraph>
    </Chapter>
);
