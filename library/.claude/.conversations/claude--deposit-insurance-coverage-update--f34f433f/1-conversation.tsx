import { Bold, Chapter, Date, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[1 April 2026](2026-04-01)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-04-01T07:14:51.022877Z"
        >
            <Origin>019d47e5-a342-781a-8140-2f12ef2f64f3</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Translate to English:</Paragraph>
            <Attachment>Uploaded “IMG_3082.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-04-01T07:14:57.755745Z"
        >
            <Origin>019d47e5-a343-7ae8-9bf5-cebe5226fba2</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                The title reads "Deposit Insurance" and the message is already bilingual — the bottom half is English:
            </Paragraph>
            <Paragraph>
                Pursuant to the Law of Georgia on the Deposit Insurance System, effective from <Word>
                    <Bold />
                    April 1, 2026
                </Word>, the amount held by each depositor in any deposit and/or account shall be insured up to <Word>
                    <Bold />
                    GEL 50,000 per depositor
                </Word>, regardless of the number of deposits and/or accounts, in each commercial bank and microbank. All
                funds held in all accounts of each depositor in a commercial bank or microbank are automatically insured by
                the Deposit Insurance Agency without any additional charge. For further information, please visit the
                official website of the Deposit Insurance Agency at: <Word>
                    <Bold />
                    www.diagency.ge
                </Word>
            </Paragraph>
            <Paragraph>
                This appears to be an official notification from Credo Bank (or similar) sent March 31 — one day before the
                new insurance coverage took effect.
            </Paragraph>
        </Message>
    </Chapter>
);
