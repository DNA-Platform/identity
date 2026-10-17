import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person is analyzing the competitive landscape between Telegram/TON and Elon Musk's yet-to-launch XChat
            messaging app, framed around an active investment thesis referred to as "TONX." The conversation began with
            a question about XChat's viability as a Telegram competitor and evolved into a detailed, research-driven
            discussion about both platforms' technical architectures, business models, and strategic positioning. The
            person demonstrated strong independent analytical instincts throughout, pushing back on Claude's framing
            multiple times with corrections that proved accurate.
        </Paragraph>
    </Chapter>
);
