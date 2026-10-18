import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Ana is a creative professional and contributor to multiple microstock platforms (Adobe Stock, iStock, and
            Shutterstock) who has maintained portfolios on these platforms since 2019. She shifted her primary work
            focus to Fiverr and stopped actively uploading to stocks, but now wants to evaluate whether resuming uploads
            is worth the effort. She is working with a collaborator named Doug to make a data-driven decision about how
            much effort to allocate to microstocks going forward. The conversation involved building a three-month
            earnings analysis (February–April 2026) across all three platforms using exported data files she provided.
        </Paragraph>
    </Chapter>
);
