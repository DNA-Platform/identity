import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            This conversation continued a long-running multi-session creative direction project called "DNA Patternity"
            — a catalog of circular city map poster artworks rendered as SVGs, intended for sale on Adobe Stock and
            iStock/Getty as both ready-to-print wall art and editable illustrator resources. The person is building a
            stock art business and working with Claude Code to automate the pipeline. The session covered five major
            areas: new city specifications, color design, metadata strategy, file format research, and SVG/AI file
            optimization.
        </Paragraph>
    </Chapter>
);
