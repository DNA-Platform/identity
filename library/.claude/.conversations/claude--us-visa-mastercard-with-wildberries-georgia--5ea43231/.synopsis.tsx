import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user inquired about using a US-issued Visa/Mastercard with Wildberries, a Russian e-commerce platform,
            specifically in Georgia. Claude conducted extensive web research to investigate payment processing,
            sanctions implications, and operational details. The research revealed that Wildberries launched in Georgia
            in October 2024 through a local franchise but processes payments through Wildberries Bank, a Russian entity.
            Due to Visa/Mastercard's suspension of Russian operations in March 2022 and sanctions-related banking
            restrictions, US-issued cards are very unlikely to work with the platform.
        </Paragraph>
    </Chapter>
);
