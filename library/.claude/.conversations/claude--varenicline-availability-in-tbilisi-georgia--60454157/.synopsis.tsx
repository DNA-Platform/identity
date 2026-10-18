import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person is based in Tbilisi, Georgia (specifically Saburtalo) and previously lived in Turkey, where they
            had access to varenicline under the brand name Dupons purchased over the counter. The conversation focused
            on finding equivalent smoking cessation options in Georgia, with Claude conducting extensive multilingual
            research (Georgian, Russian, German, English, Turkish) across pharmacy databases, legal registries, and
            academic sources. Key findings: Champix/varenicline registrations in Georgia have lapsed and stock is
            unavailable; cytisine (Tabex, 1.5mg, ~79-89 GEL per 100-tablet pack) is available OTC, including via Wolt
            pharmacy storefronts in Tbilisi, and shares the same α4β2 partial agonist mechanism as varenicline but with
            meaningful pharmacokinetic differences (4-5 hour half-life vs. 24 hours, poorer blood-brain barrier
            penetration, shorter volume of distribution). The person uses varenicline as ongoing maintenance support
            rather than a short-course quit aid, making cytisine's frequent dosing schedule (6x/day tapering) a poor
            practical substitute. The conversation resolved toward Turkey remaining a viable supply route: Dupons is
            actively marketed by Abdi İbrahim as of July 2026 at 3,828.93 TL/56 tablets on ordinary white prescription,
            and personal quantities carried across the border fall in an uncontrolled tier under Georgian importation
            norms.
        </Paragraph>
    </Chapter>
);
