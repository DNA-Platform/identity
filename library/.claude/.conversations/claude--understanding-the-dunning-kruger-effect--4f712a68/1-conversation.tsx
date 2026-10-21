import { Chapter, Line, List, Paragraph, Title } from '@dna-platform/public';
import { Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2024-11-06T05:54:53.385080Z"
        >
            <Origin>0e6a448b-c233-4b71-8994-7a280f660a01</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>What is dunning kruger</Paragraph>
        </Message>
        <Message
            at="2024-11-06T05:54:53.385080Z"
        >
            <Origin>6100285a-6253-4884-a3b7-7cd1596ceca0</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                The Dunning-Kruger effect is a cognitive bias where people with limited knowledge or expertise in a given
                domain tend to overestimate their own competence. In other words, beginners often don't know enough to
                accurately assess how little they know.
            </Paragraph>
            <Paragraph>The effect has two key parts:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    Low-skilled people tend to overestimate their abilities because they lack the knowledge to recognize
                    their own mistakes
                </Line>
                <Line>
                    As people gain more expertise, they actually tend to underestimate their abilities, becoming more aware
                    of how much they don't know
                </Line>
            </Paragraph>
            <Paragraph>This creates an interesting pattern where confidence often follows a curve:</Paragraph>
            <Paragraph>
                <List />
                <Line>Very high confidence when first learning (the "peak of mount stupid")</Line>
                <Line>
                    A sharp drop in confidence as one starts to realize how much they don't know (the "valley of despair")
                </Line>
                <Line>A gradual increase in confidence as genuine expertise develops</Line>
            </Paragraph>
            <Paragraph>
                The effect is named after David Dunning and Justin Kruger, who first described it in their 1999 research
                paper. A classic example is how beginning programmers often feel they've mastered coding after learning
                basic syntax, not realizing the vast complexity of software development that lies ahead.
            </Paragraph>
            <Paragraph>Would you like me to elaborate on any aspect of this effect?</Paragraph>
        </Message>
    </Chapter>
);
