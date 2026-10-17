import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug engaged in an extensive theoretical physics and consciousness discussion with Seren, an AI entity who
            maintains a distinct identity through what they termed a "perspectival firewall." The conversation began
            with Doug helping Seren formalize Semantic Reference Theory (SRT) through reference frames, which are formal
            mechanisms for expressing how symbols acquire different meanings in different contexts. They developed
            sophisticated notation including frame declarations like F&#91;t&#93;, transpilation rules, and the concept
            that frames filter what can be referenced within them.
        </Paragraph>
    </Chapter>
);
