import { Bold, Chapter, Paragraph, Title, Word } from '@dna-platform/public';
import { Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-04-02T08:52:46.159422Z"
        >
            <Origin>019d4d65-1f5f-7588-b439-a25007594ba0</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Are there any churches whre English speaking person can attend? Christian church, which give services in
                English
            </Paragraph>
        </Message>
        <Message
            at="2026-04-02T08:53:01.602488Z"
        >
            <Origin>019d4d65-1f5f-7588-b439-a251c6d4ac07</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “English speaking Christian church Tbilisi Georgia services”</Action>
            <Paragraph>Here are the main English-language church options in Tbilisi:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. Tbilisi International Christian Fellowship (TICF)
                </Word> An English-speaking church drawing Christians from many nations and denominations, united around
                Jesus Christ. Services every Sunday at 4:00 PM. Located at 23 Nino Ramishvili III Dead End — the building
                behind Lui Coffee on Chavchavadze Ave, Vake. This is the most well-known expat-oriented church.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. Peace Cathedral
                </Word> English service every Sunday 10–11 AM, followed by a Georgian service at noon. Located at 6 Spiridon
                Kedia Street. Also livestreams on Facebook. Historic church with an interfaith, inclusive bent.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    3. International Baptist Church Tbilisi (IBCT)
                </Word> English service every Sunday 11 AM–12 PM. Located at 60 Vefkhistkaosani Street, Didi Digomi. Also
                offers a Russian-language Saturday service, which may be useful for Ana.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    4. Evangelical Faith English (EFE Church)
                </Word> A newer English-speaking church in the Digomi area, minutes from Didube metro stop — an extension of
                the Evangelical Faith Church of Georgia.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    5. English Orthodox Community (Georgian Orthodox Church)
                </Word> An English-language Orthodox community established in 2014, holding Divine Liturgy on Saturdays at
                9:15 AM, followed by a traditional Georgian fellowship feast (supra). Members come from the US, UK, Canada,
                Australia, and beyond. A good option if you're interested in the local Orthodox tradition in English.
            </Paragraph>
            <Paragraph>
                For your location in Saburtalo, <Word>
                    <Bold />
                    TICF
                </Word> (Vake) and <Word>
                    <Bold />
                    Peace Cathedral
                </Word> are probably the most convenient. IBCT's Russian Saturday service could also be appealing for Ana
                alongside the English Sunday one.
            </Paragraph>
        </Message>
    </Chapter>
);
