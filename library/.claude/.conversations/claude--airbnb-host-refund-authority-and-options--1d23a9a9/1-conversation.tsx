import { Bold, Chapter, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-06-12T11:51:04.542907Z"
        >
            <Origin>019ebbac-2ccf-7ae5-b7c5-094e997414df</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Can an AirBnB client give money back for a bad stay if a customer complains? Or are all reimbursements
                through AirBnB and the person renting the unit has no power.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-12T11:51:18.530444Z"
        >
            <Origin>019ebbac-2cd2-7b03-9c56-00e64fc70dc9</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Hosts do have direct power to refund — it's not all locked behind Airbnb.</Paragraph>
            <Paragraph>
                A host can issue a refund to a guest directly through the Airbnb platform, either during the stay or after,
                using the "Send or request money" / resolution tools tied to the reservation. The host chooses the amount
                (partial or full), and Airbnb processes the actual money movement back to the guest's payment method. So the
                <Word>
                    <Emphasis />
                    decision
                </Word> is the host's, but the <Word>
                    <Emphasis />
                    transaction
                </Word> still flows through Airbnb's system rather than host-to-guest cash.
            </Paragraph>
            <Paragraph>The two main paths:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Host-initiated refund
                    </Word> — the host voluntarily refunds some or all of the payout, which is what happens when a host
                    agrees a stay was bad and wants to make it right. This is the host's call.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Airbnb-mediated refund
                    </Word> — if the guest files a complaint under AirCover / the rebooking-and-refund policy and the host
                    won't refund, Airbnb can step in and decide, sometimes refunding the guest out of the host's payout
                    regardless of the host's wishes.
                </Line>
            </Paragraph>
            <Paragraph>
                So both are true depending on the situation: a host can choose to give money back, and Airbnb can also force
                a refund if a guest escalates a valid complaint. A host who wants to refund is never blocked from doing so.
            </Paragraph>
            <Paragraph>
                One caveat worth checking against current terms, since Airbnb adjusts its refund and AirCover policies
                periodically — want me to pull the latest on a specific scenario (e.g. guest already checked out, or a
                cleanliness/misrepresentation claim)?
            </Paragraph>
        </Message>
    </Chapter>
);
