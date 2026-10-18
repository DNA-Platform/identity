import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked about a rumored Street Fighter live-action movie with an impressive cast, prompted by a
            social media reel they had seen. Claude confirmed the movie is real — a Paramount reboot releasing October
            16, 2026, directed by Kitao Sakurai, set in 1993, starring Andrew Koji, Noah Centineo, Callina Liang, Jason
            Momoa, Roman Reigns, David Dastmalchian, Cody Rhodes, Andrew Schulz, Vidyut Jammwal, Eric André, and 50
            Cent. Claude clarified that the specific casting reel the person saw was AI-generated fan casting, not
            official, and that the "AI info" tag on the reel was quietly signaling this.
        </Paragraph>
    </Chapter>
);
