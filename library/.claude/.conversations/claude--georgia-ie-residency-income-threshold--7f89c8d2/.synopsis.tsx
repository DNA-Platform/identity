import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            This conversation involved two people working together — Ana and Doug — who are researching accounting and
            tax compliance options for Ana's recently registered individual entrepreneur (IE) business in Georgia. Ana's
            IE is registered under the name DNA (დიენეი), business registration number 305861868, with registration
            dated June 3, 2026. She operates under Georgia's Small Business Status (SBS) with a 1% turnover tax rate and
            serves exclusively foreign clients through platforms including Fiverr, stock platforms, and a US-based
            laboratory. Her primary Georgian bank is Credo, with both a personal account and a business account.
        </Paragraph>
    </Chapter>
);
