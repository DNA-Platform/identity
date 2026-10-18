import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person is building an automated stock asset upload pipeline called "DNA Patternity" and working with a
            colleague named Ana who manages contributor portal access. The conversation focused on researching and
            specifying how to extend an existing metadata embedding pipeline (already handling Adobe Stock and iStock)
            to support Alamy and Shutterstock, with Spoonflower deferred for later. The person works with Claude Code
            for automation and uses Playwright for browser-based portal interactions, FTP/FTPS for file delivery, and
            exiftool for IPTC metadata embedding.
        </Paragraph>
    </Chapter>
);
