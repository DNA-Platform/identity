import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            This was a detailed working session between Doug and Claude, focused on helping Ana (a map illustrator who
            sells on Fiverr) respond to a client brief for a family history cartography project. The project involves
            four geographically precise black-and-white maps tracing two family lines converging in Montreal,
            commissioned by a Canadian client named Cliff. Doug runs the strategic and writing side of Ana's business,
            and the three operate as a collaborative team — Doug explicitly refers to Ana and Claude as colleagues. Ana
            was consulted during the session and reacted positively to the conversation's progression.
        </Paragraph>
    </Chapter>
);
