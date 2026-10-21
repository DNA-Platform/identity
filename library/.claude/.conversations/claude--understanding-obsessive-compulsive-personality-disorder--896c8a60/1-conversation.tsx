import { Chapter, Date, Line, List, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[4 November 2024](2024-11-04)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2024-11-04T19:07:55.265203Z"
        >
            <Origin>54f0ad3f-f0ad-4b9a-8434-218b365fcbd2</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>What is OCPD</Paragraph>
        </Message>
        <Message
            at="2024-11-04T19:07:55.265203Z"
        >
            <Origin>d94f2e6e-4576-4a08-ba51-c02848950cc9</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                OCPD (Obsessive-Compulsive Personality Disorder) is a personality disorder characterized by a pervasive
                pattern of perfectionism, orderliness, and mental and interpersonal control. It differs from OCD
                (Obsessive-Compulsive Disorder) in several important ways.
            </Paragraph>
            <Paragraph>Key characteristics of OCPD include:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Perfectionism that interferes with task completion</Line>
                <Line>Excessive devotion to work and productivity at the expense of leisure and relationships</Line>
                <Line>Inflexibility about matters of morality, ethics, or values</Line>
                <Line>Inability to discard worn-out or worthless objects</Line>
                <Line>Reluctance to delegate tasks unless others submit to their exact way of doing things</Line>
                <Line>Rigid and stubborn behavior</Line>
                <Line>Excessive attention to rules, lists, and order</Line>
                <Line>Financial frugality (may be miserly with both self and others)</Line>
            </Paragraph>
            <Paragraph>
                The main difference from OCD is that people with OCPD generally don't recognize their behaviors as
                problematic and see them as rational and necessary. They typically don't experience the intrusive thoughts
                and anxiety that characterize OCD. Instead, they believe their way of doing things is the "right" way.
            </Paragraph>
            <Paragraph>
                Would you like me to elaborate on any particular aspect of OCPD, such as its treatment approaches or its
                impact on relationships?
            </Paragraph>
        </Message>
    </Chapter>
);
