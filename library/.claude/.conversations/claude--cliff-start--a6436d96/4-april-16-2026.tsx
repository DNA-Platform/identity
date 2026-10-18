import { Chapter, Date, Paragraph, Title } from '@dna-platform/public';
import { CodeBox, Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[16 April 2026](2026-04-16)</Date>
        </Dated>
        <Title>[[ 16 April 2026 ]]</Title>
        <Message
            at="2026-04-16T10:21:01.450512Z"
        >
            <Origin>019d95ce-ed56-74de-889d-5b0e7c8fcfa1</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>We got this message:</Paragraph>
            <Paragraph>
                Ana, The project is not affordable for me. I may have proceed if the quote was in Canadian dollars, but US
                dollars adds a further 40%. I will have to search for a second best solution. Thank you for your help.
                Regards, Cliff
            </Paragraph>
            <Paragraph>What is 975 CAD in USD? We are going offer that instead</Paragraph>
        </Message>
        <Message
            at="2026-04-16T10:21:04.907952Z"
        >
            <Origin>019d95ce-ed56-7fbb-a757-5830dc169e2b</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                $975 CAD is about $701 USD. That's a meaningful cut from $975 USD but still reasonable for the work. Want me
                to draft the response?
            </Paragraph>
        </Message>
        <Message
            at="2026-04-16T10:22:25.825326Z"
        >
            <Origin>019d95d0-35e6-739b-8787-d2e01b89772d</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Yeah draft response. BE nice. We like the project and what it's for. Offer to do it for 975 CAD which works
                out to a little more than $700 USD. So let's call it $700 - say it something like that. Use the brand voice
                and standard messaging. This can be a relatively short message
            </Paragraph>
        </Message>
        <Message
            at="2026-04-16T10:22:29.837283Z"
        >
            <Origin>019d95d0-35e7-7e37-a352-fbdbadf1d96a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <CodeBox>
                {`Hi Cliff!

I completely understand - I should have thought to ask about your currency preference before quoting, and I'm sorry for the confusion.

I'd really love to work on this project, so let me offer to do it for $975 CAD - which works out to just over $700 USD at today's exchange rate. I hope that feels more manageable.

This is exactly the kind of work I find most meaningful, and I'd hate for us not to find a way to make it happen.

Ana 😊`}
            </CodeBox>
        </Message>
        <Message
            at="2026-04-16T10:22:54.734130Z"
        >
            <Origin>019d95d0-a804-7839-8c35-9596936e8f1f</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                "I completely understand - I should have thought to ask about your currency preference before quoting, and
                I'm sorry for the confusion." - no we shouldn't have. And this isn't confusion. We are just giving him a
                discount
            </Paragraph>
        </Message>
        <Message
            at="2026-04-16T10:22:57.714896Z"
        >
            <Origin>019d95d0-a804-7945-8a36-d3972f638619</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <CodeBox>
                {`Hi Cliff!

I'd really love to work on this project - it's exactly the kind of work I find most meaningful. So let me revise the quote to $975 CAD, which works out to just over $700 USD at today's exchange rate. I hope that makes it work for you!

Ana 😊`}
            </CodeBox>
        </Message>
        <Message
            at="2026-04-16T10:24:46.990207Z"
        >
            <Origin>019d95d2-5e7c-79e4-a275-f0a5282182ab</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Hi Cliff! I'd really love to work on this project - it's exactly the kind of work I find most meaningful. So
                let me revise the quote to $975 CAD, which works out to just over $700 USD at today's exchange rate, so
                let's call the price $700 I hope that makes the project work for you! Ana 😊
            </Paragraph>
            <Paragraph>
                Thats the message so far. Can you revise the statement where you say why you want to work on the project?
                Why not say something less generix that shows we've read his brief
            </Paragraph>
        </Message>
        <Message
            at="2026-04-16T10:24:49.453855Z"
        >
            <Origin>019d95d2-5e7c-7a37-98a5-e3fe37906b29</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <CodeBox>
                {`Hi Cliff!

I'd really love to work on this project - two families finding each other in Montreal from opposite ends of the world is exactly the kind of story that deserves to be mapped carefully. So let me revise the quote to $975 CAD, which works out to just over $700 USD at today's exchange rate, so let's call the price $700.

I hope that makes the project work for you!

Ana 😊`}
            </CodeBox>
        </Message>
        <Message
            at="2026-04-16T10:25:10.925379Z"
        >
            <Origin>019d95d2-bc2f-7974-bb0a-7c809a0e4279</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>No too sentimental. Something close to the original but with context</Paragraph>
        </Message>
        <Message
            at="2026-04-16T10:25:12.922435Z"
        >
            <Origin>019d95d2-bc2f-7f2d-8dc3-1c8b98821f7a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <CodeBox>
                {`Hi Cliff!

I'd really love to work on this project - family history cartography is some of the most rewarding work I do. So let me revise the quote to $975 CAD, which works out to just over $700 USD at today's exchange rate, so let's call the price $700.

I hope that makes the project work for you!

Ana 😊`}
            </CodeBox>
        </Message>
    </Chapter>
);
