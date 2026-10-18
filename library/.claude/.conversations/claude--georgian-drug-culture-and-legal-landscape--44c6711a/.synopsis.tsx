import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person is traveling in the region, having recently come from Turkey, and was curious about drug culture,
            policy, and underground markets in the Republic of Georgia. They framed their inquiry comparatively, noting
            Turkey's strict enforcement environment as a baseline. The conversation covered Georgian psychedelic culture
            (or lack thereof), the Tbilisi electronic music scene, darknet market activity, and the academic study of
            cryptomarkets.
        </Paragraph>
    </Chapter>
);
