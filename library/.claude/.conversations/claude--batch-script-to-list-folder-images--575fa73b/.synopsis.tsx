import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug worked with Claude to convert a Russian legal document from Markdown to PDF format for court
            submission. The document was written explanations for case № 02-9021/2025 in a Russian family court,
            containing both Russian text and English appendices with chat transcripts and handwritten materials. Doug
            initially attempted to use pandoc with XeLaTeX but encountered rendering issues with emoji characters
            (hearts) in the chat transcripts. Claude recommended switching to HTML with Chrome's print-to-PDF
            functionality, which better handled the mixed content and emoji rendering.
        </Paragraph>
    </Chapter>
);
