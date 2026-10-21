import { Chapter, Paragraph, Title } from '@dna-platform/public';
import { Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-05-08T15:54:21.114521Z"
        >
            <Origin>019e084b-d8db-7cf2-8310-77ac64ebfb37</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Does payoneer allow russians on the platform?</Paragraph>
        </Message>
        <Message
            at="2026-05-08T15:54:45.122080Z"
        >
            <Origin>019e084b-d8db-7cb5-b278-08f796d82d8a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Payoneer Russia users accept sanctions 2026”</Action>
            <Action>Searched the web for “Payoneer suspended Russia operations 2024 closed accounts”</Action>
            <Paragraph>
                Short answer: no for Russia-resident users, yes for Russian passport holders living elsewhere.
            </Paragraph>
            <Paragraph>
                Payoneer ceased providing services to residents of Russia on December 8, 2022, and closed all affected
                accounts on December 16, 2022. New accounts cannot be opened with a Russian address, and existing
                Russia-based accounts were shut down.
            </Paragraph>
            <Paragraph>
                However, Russian passport holders can open accounts if they can prove residence outside Russia — typically
                via a recent utility bill or bank statement with their name and local address from the last 3 months.
                Relevant for Ana: a Georgian Credo Bank statement with her Tbilisi address should satisfy the
                proof-of-residence requirement, and her Russian passport is acceptable as ID.
            </Paragraph>
            <Paragraph>
                One caveat worth flagging — Payoneer has been aggressive on sanctions compliance after their $1.25 million
                NYSDFS penalty in November 2023 for Russia sanctions violations, so they scrutinize Russian nationals
                carefully even with foreign residence. Expect thorough KYC review.
            </Paragraph>
        </Message>
    </Chapter>
);
