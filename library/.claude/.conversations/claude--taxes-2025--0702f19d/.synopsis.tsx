import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            This was an extensive US tax consultation for a person (Doug) who owns a Wyoming LLC structured as a
            two-person partnership with a partner named Ana, who resides in Georgia (the country) and is not a US
            citizen. Doug is a full-year New York State resident for 2025 who sold his primary residence in December and
            took a traditional IRA withdrawal during the year. He is 42 years old, meaning the IRA withdrawal carries a
            10% early withdrawal penalty. The LLC generated foreign-sourced income from Ana's services performed
            entirely outside the US, with Ana receiving a guaranteed payment that consumed essentially all partnership
            income, leaving Doug with a net loss from his capital investment in business expenses (domain, hosting,
            etc.) tracked through a Mercury business bank account.
        </Paragraph>
    </Chapter>
);
