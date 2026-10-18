import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person is living in Tbilisi, Georgia and sought help finding a local equivalent to Terro ant traps,
            which are a US brand of slow-kill borax-based bait stations. Their goal was specifically to find something
            available for delivery via Glovo or Wolt. Claude explained that true borax-based bait stations are hard to
            find in Georgia, and identified Raid Ant Gel (thiamethoxam-based) and Combat bait stations as the closest
            functional equivalents, noting that Domino stores are available on Glovo and carry Raid products. Claude
            also suggested the Russian-market brand "Великий Воин" as a CIS-market alternative available on MyMarket.ge,
            and provided a DIY borax-and-sugar paste recipe as a reliable fallback, noting that boric acid (борная
            кислота) is readily available at Tbilisi pharmacies for a low cost.
        </Paragraph>
    </Chapter>
);
