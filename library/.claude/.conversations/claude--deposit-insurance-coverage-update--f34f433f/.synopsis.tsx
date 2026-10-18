import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person submitted a translation request, though the original source text was not included in the
            conversation. Claude provided an English translation and contextual explanation of an official Georgian
            banking notice regarding deposit insurance. The document, titled "Deposit Insurance," outlined that
            effective April 1, 2026, depositor funds would be insured up to a specified amount per depositor across
            commercial banks and microbanks in Georgia, administered automatically by the Deposit Insurance Agency.
            Claude noted the document was already partially bilingual and identified it as an official notification
            likely from a Georgian bank, sent the day before the new insurance coverage took effect, and directed to the
            agency's website at www.diagency.ge.
        </Paragraph>
    </Chapter>
);
