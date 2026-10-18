import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user Doug discussed domain strategy for his project "dna" which has multiple meanings: Digital Narrative
            Art, Doug &amp; Ana (his partnership with Ana), and the biological DNA concept. He currently owns dna.llc
            for corporate use and has been renting dna.love for two years through GoDaddy's leasing service, but finds
            it expensive and wants alternatives that work with Google Workspace for email. Doug demonstrated strong
            preferences for nerdy, layered meanings and easter eggs that only certain people would understand, citing
            xkcd as an example of the aesthetic he appreciates.
        </Paragraph>
    </Chapter>
);
