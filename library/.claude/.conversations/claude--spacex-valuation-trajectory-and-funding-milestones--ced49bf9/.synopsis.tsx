import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person requested research and document creation on SpaceX's valuation trajectory, spanning from its
            founding in 2002 through its June 2026 IPO and current trading. They asked for an editable artifact
            summarizing each major valuation movement with analytical commentary. Claude conducted multiple web searches
            to gather accurate, sourced data across the full timeline, then produced a detailed markdown document saved
            as an output file.
        </Paragraph>
    </Chapter>
);
