import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug and Ana are staying at Hotel Panorama in Kvariati, Georgia (near Gonio) with a car, planning day trips
            in the Adjara region. The conversation began with Doug asking Claude to research day trip options within
            roughly an hour's drive, specifically noting that Batumi is less interesting since Ana will visit
            separately. Claude was asked to research in Russian and Georgian to access richer local sources. Initial
            research surfaced three outdoor/nature options (Machakhela Gorge, Makhuntseti Waterfall with Queen Tamar
            Bridge, and Mtirala National Park), but Doug pushed back correctly identifying this as myopic — Claude had
            tunnel-visioned on hiking and failed to present the full range of activity types. Claude acknowledged this
            and expanded to include archaeological sites (Gonio Fortress, Petra Fortress at Tsikhisdziri), food and wine
            experiences (Adjarian Wine House), and the Batumi Botanical Garden, with honest time budgets for each.
        </Paragraph>
    </Chapter>
);
