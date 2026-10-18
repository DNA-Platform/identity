import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user inquired about the naming origin of Wildberries, a Russian e-commerce company, noting that dropoff
            points on maps visually resemble wildberries. Claude researched and found that the name was chosen for its
            evocations of "color and dynamism," with the company using distinctive pink and purple branding. An
            interesting historical note emerged: in 2022, the company briefly changed its name to "Yagodki" (Russian for
            "little berries") after government criticism of English company names, but quickly reverted due to user
            backlash.
        </Paragraph>
    </Chapter>
);
