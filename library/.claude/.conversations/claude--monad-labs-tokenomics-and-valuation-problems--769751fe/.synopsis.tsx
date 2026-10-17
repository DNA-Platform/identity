import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked Claude to research and analyze Monad Labs (recently renamed Category Labs) and their MON
            token, specifically focusing on why the project is struggling despite being highly anticipated. The
            conversation covered objective events, tokenomics, fee metrics, team posture, roadmap, and competitive
            positioning, with the person pushing the analysis toward a more structural critique as the conversation
            developed.
        </Paragraph>
    </Chapter>
);
