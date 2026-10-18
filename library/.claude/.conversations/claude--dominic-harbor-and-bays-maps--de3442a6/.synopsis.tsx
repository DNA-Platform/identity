import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked Claude to locate prior discussion about work with a client named Dominic/Domi related to
            "Harbours &amp; Bays" maps. Claude searched conversation history and project memory, identifying a relevant
            prior chat titled "Domi payment" from July. Claude summarized the payment status: the "Harbours &amp; Bays
            North" map project was fully paid via two transfers, including a final round with page numbers added. Four
            items remained open and unpaid, totaling an outstanding balance: an overview map titled "Where This Guide
            Takes You," a "Routes North" item, a paid revision round for "Routes South" (2025), and a paid revision
            round for "Harbours &amp; Bays South" (2025). A final English-language message summarizing all four
            outstanding items had been prepared for sending to Domi via WhatsApp, and a prior decision was noted not to
            pass along a bank transfer fee from an earlier payment. Claude asked what the person needed next—whether
            Domi had responded or paid, a new order or revision request had come in for Harbours &amp; Bays, or whether
            confirmation was needed that a payment had gone through—and offered to cross-check against new
            correspondence exports or Wise payment screenshots if provided.
        </Paragraph>
    </Chapter>
);
