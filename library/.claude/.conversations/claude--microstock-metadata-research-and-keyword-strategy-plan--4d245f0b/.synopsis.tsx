import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            This conversation involved Doug, who is building an automated metadata injection pipeline for a microstock
            vector art business. The contributor is Ana, an experienced microstock artist whose portfolio includes
            vector maps, abstract patterns, seamless geometric designs, doodle iconography, and data visualization
            assets. The pipeline submits to two platforms: Adobe Stock and iStock/Getty Images. Claude Code (CC) is the
            agent building the pipeline, and this conversation with Claude (web) was intended to produce research
            documents CC can load into its wiki library under docs/metadata/, with separate subfolders per platform.
        </Paragraph>
    </Chapter>
);
