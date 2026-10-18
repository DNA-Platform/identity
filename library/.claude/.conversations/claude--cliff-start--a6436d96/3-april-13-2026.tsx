import { Chapter, Date, Paragraph, Title } from '@dna-platform/public';
import { CodeBox, Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[13 April 2026](2026-04-13)</Date>
        </Dated>
        <Title>[[ 13 April 2026 ]]</Title>
        <Message
            at="2026-04-13T15:35:16.360328Z"
        >
            <Origin>019d877b-88cf-7f83-a2d9-cc152dbbdab5</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Okay, back to work :)</Paragraph>
            <Paragraph>
                "Ana, Thank you for the quotation. Is the quotation in Canadian or US dollars? I live in Canada. Thanks,
                Cliff"
            </Paragraph>
            <Paragraph>We need a quick follow up message. Maybe:</Paragraph>
            <Paragraph>Hi Cliff! Fiverr charges in US Dollars, so most people around here quote in USD too :)</Paragraph>
            <Paragraph>
                With her normal smiley there. But is that true? FIverr does quote in USD right to everyone?
            </Paragraph>
        </Message>
        <Message
            at="2026-04-13T15:35:28.788724Z"
        >
            <Origin>019d877b-88cf-7ed7-b53b-dd453756164d</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Fiverr currency Canadian dollars USD billing”</Action>
            <Paragraph>
                Worth being careful here. Fiverr's base currency is USD and that's how Ana prices, but Canadian buyers can
                actually see and pay in CAD on their end depending on their display settings. So "Fiverr charges in USD to
                everyone" isn't quite accurate - Cliff might be seeing CAD on his side already.
            </Paragraph>
            <Paragraph>The safe and honest thing is simply to confirm the quote is in USD. Something like:</Paragraph>
            <CodeBox>
                {`Hi Cliff! The quote is in US dollars - that's the currency I work in on Fiverr. Happy to clarify anything else!

Ana 😊`}
            </CodeBox>
            <Paragraph>Clean, accurate, no overclaiming about how Fiverr handles his end.</Paragraph>
        </Message>
        <Message
            at="2026-04-13T15:36:48.790238Z"
        >
            <Origin>019d877c-f269-7b51-853e-95d798fd35a8</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>WHat is the conversion between the two?</Paragraph>
        </Message>
        <Message
            at="2026-04-13T15:36:54.058197Z"
        >
            <Origin>019d877c-f269-7b56-9f05-fe3b25de9706</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “USD CAD exchange rate today”</Action>
            <Paragraph>
                Right now $1 USD is approximately $1.39 CAD. So Cliff's $975 USD quote works out to roughly $1,355 CAD.
                Worth knowing in case he asks - but probably don't volunteer it unless he does, since CAD math doesn't make
                our price look smaller.
            </Paragraph>
        </Message>
    </Chapter>
);
