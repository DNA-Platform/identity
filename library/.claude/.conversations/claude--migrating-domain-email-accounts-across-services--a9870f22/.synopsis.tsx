import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            I need to migrate off a domain email address. I have equivlanet emails in another domain to swap them to.
            The first few things to do are:
        </Paragraph>
    </Chapter>
);
