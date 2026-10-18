import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            This conversation continued Ana's ongoing work setting up her Georgian sole proprietorship (IE) tax and
            accounting situation. Ana received and needed translated an email from Sharkyyy (a self-service tax software
            at 60 GEL/month or 40 GEL/month annually), which Claude translated into Russian and contextualized within
            their prior comparison of accounting firms — noting that Sharkyyy is software-assisted self-service rather
            than full-service accounting like Expertos or relocup. Claude also surfaced a link to their earlier
            comparison conversation and flagged that the first declaration deadline (nil declaration for June) falls on
            July 15, making the accountant decision time-sensitive.
        </Paragraph>
    </Chapter>
);
