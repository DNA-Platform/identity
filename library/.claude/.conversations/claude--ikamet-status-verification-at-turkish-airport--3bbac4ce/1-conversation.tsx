import { Bold, Chapter, Date, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[31 January 2026](2026-01-31)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-01-31T18:03:19.947710Z"
        >
            <Origin>019c1539-6248-738a-832b-bdfa7d873c66</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I got my ikamet but not my card yet. I was not at the office of immigration that I am in the system but I
                don’t know if they’ll know that at the airport. Will they? Use wrb dont guess.
            </Paragraph>
        </Message>
        <Message
            at="2026-01-31T18:03:58.130284Z"
        >
            <Origin>019c1539-6248-7bbc-bc51-cebcd60b81d1</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Turkey ikamet approved no card travel airport immigration check system”</Action>
            <Action>
                Searched the web for “Turkey airport immigration system check ikamet status approved waiting card”
            </Action>
            <Action>Searched the web for “"müracaat belgesi" Turkey airport immigration check QR code system”</Action>
            <Action>
                Searched the web for “Turkey passport control airport residence permit database check foreigner”
            </Action>
            <Paragraph>Based on the search results, here's what I found:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Yes, Turkey has a centralized system
                </Word> — your ikamet status is in the national migration database regardless of which office processed it.
                However, the practical recommendation from multiple sources is to <Word>
                    <Bold />
                    print your Müracaat Belgesi
                </Word> (application/approval document) with the QR code.
            </Paragraph>
            <Paragraph>
                You can get this from e-ikamet.goc.gov.tr by clicking "I want to know the result of my application" and then
                clicking the "Print Application Document" button. This application document with the QR code entitles you to
                visa-free entry at airports even if you do not receive your residence permit card.
            </Paragraph>
            <Paragraph>The QR code is specifically designed so officials can verify your status in the system.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    For extra peace of mind:
                </Word>
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Print that Müracaat Belgesi before you travel</Line>
                <Line>Refer to the approval PDF document you were provided as proof in the meantime</Line>
            </Paragraph>
            <Paragraph>
                If you need to leave Turkey before receiving the residence permit card, make sure you have an Approval
                Document (Müracaat Belgesi) and residence payment receipt with you at the airport that proves your
                application for residence permit.
            </Paragraph>
            <Paragraph>
                One thing to be aware of: if you have applied for a residence permit and exit with your applicant form, you
                are exempted from the visa requirement when entering the country if you return within fifteen days each
                time.
            </Paragraph>
            <Paragraph>
                So while the airport <Word>
                    <Emphasis />
                    should
                </Word> be able to see your status, having that printed document with QR code is your safety net and the
                officially recommended approach.
            </Paragraph>
        </Message>
    </Chapter>
);
