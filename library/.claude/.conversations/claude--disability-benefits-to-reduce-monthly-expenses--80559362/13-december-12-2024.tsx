import { Chapter, Date, Line, List, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[12 December 2024](2024-12-12)</Date>
        </Dated>
        <Title>[[ 12 December 2024 ]]</Title>
        <Message
            at="2024-12-12T19:49:09.970841Z"
        >
            <Origin>39bd6e37-f0f2-4f2f-a91b-c7ed4385a034</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Is there a way to cancel my SSA application? I am working with Binder &amp; Binder. It will take them longer
                than it will take to have my current application to be complete, and I want to either pause it or cancel it
            </Paragraph>
        </Message>
        <Message
            at="2024-12-12T19:49:51.385222Z"
        >
            <Origin>cce1cee4-0319-42a7-a2f7-d29acaed4e32</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Claude: Yes, you can withdraw your Social Security disability application. You have a few options:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Call SSA directly: 1-800-772-1213</Line>
                <Line>Contact your local Social Security office</Line>
                <Line>Submit a written withdrawal request</Line>
            </Paragraph>
            <Paragraph>Important points:</Paragraph>
            <Paragraph>
                <List />
                <Line>Better to withdraw than let it be denied</Line>
                <Line>A denial could affect future applications</Line>
                <Line>Binder &amp; Binder likely prefer to start fresh with their process</Line>
                <Line>You should confirm with Binder &amp; Binder before withdrawing</Line>
            </Paragraph>
            <Paragraph>I recommend:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Ask Binder &amp; Binder what they prefer</Line>
                <Line>If they say withdraw, contact SSA</Line>
                <Line>Get confirmation of withdrawal in writing</Line>
            </Paragraph>
            <Paragraph>
                Would you like help finding your local SSA office contact information or drafting a withdrawal request?
            </Paragraph>
        </Message>
    </Chapter>
);
