import { Chapter, Date, Line, List, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[11 November 2024](2024-11-11)</Date>
        </Dated>
        <Title>[[ 11 November 2024 ]]</Title>
        <Message
            at="2024-11-11T19:58:47.046297Z"
        >
            <Origin>d5bf2770-df16-4299-aa3e-b2e29e11e6c9</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>What is the name of a trust document</Paragraph>
        </Message>
        <Message
            at="2024-11-11T19:58:47.046297Z"
        >
            <Origin>028d4c64-8894-4dc7-a2a8-59999d0aaa4c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>There are several common names for trust documents, including:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Trust Deed</Line>
                <Line>Trust Agreement</Line>
                <Line>Trust Instrument</Line>
                <Line>Declaration of Trust</Line>
                <Line>Trust Indenture</Line>
            </Paragraph>
            <Paragraph>
                The most widely used term is "Trust Deed" or "Trust Agreement." These documents spell out:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Who created the trust (the grantor/settlor)</Line>
                <Line>Who manages it (the trustee)</Line>
                <Line>Who benefits from it (the beneficiaries)</Line>
                <Line>What property is in the trust</Line>
                <Line>How the trust should be managed</Line>
                <Line>The rules and conditions for distributions</Line>
            </Paragraph>
            <Paragraph>
                The specific name can sometimes vary based on the type of trust (e.g., living trust vs. testamentary trust)
                or the jurisdiction. Would you like me to explain more about a particular type of trust document?
            </Paragraph>
        </Message>
    </Chapter>
);
