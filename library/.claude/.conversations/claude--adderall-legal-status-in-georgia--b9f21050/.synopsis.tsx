import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            This conversation is part of a project focused on Georgia (the country), in which the person is researching
            Georgian laws and regulations, apparently in a context where they interact with people living there and are
            observing how policies affect daily life. The discussion covered Georgian controlled substance regulations
            in detail, including the classification of amphetamine-based treatments under Georgia's List II narcotic
            framework, the practical absence of any registered stimulant ADHD treatments in the country, and the
            enforcement reality demonstrated by a 2026 arrest case. The conversation traced the historical and policy
            roots of Georgia's strict drug laws through Soviet-era frameworks and the 2006 zero-tolerance reforms, and
            compared Georgia's approach to neighboring countries including Russia (where stimulants are fully
            prohibited) and Turkey (where methylphenidate is legally prescribed and serves as a regional source for
            Georgians).
        </Paragraph>
    </Chapter>
);
