import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person is working on a business registration task in Georgia (the country) for an individual
            entrepreneur (IE) client and needed to understand whether a business name search was required or available
            before completing the registration form. The specific question arose from a form field noting that a
            business name is "not mandatory" for IE registration.
        </Paragraph>
    </Chapter>
);
