import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user engaged in a detailed investigative analysis of Pavel Durov, founder of Telegram, questioning the
            standard narrative about his role as a technical founder. They requested primary sources and in-depth
            articles about Durov, leading to an examination of biographical materials, interviews, and investigative
            journalism. The conversation revealed a pattern where most sources repeat a "Russian Zuckerberg" narrative
            without substantive evidence of Durov's technical contributions, while his brother Nikolai Durov - a
            multiple International Mathematical Olympiad gold medalist, two-time ICPC World Champion, and PhD
            mathematician - appears to be the actual technical architect behind both VKontakte and Telegram.
        </Paragraph>
    </Chapter>
);
