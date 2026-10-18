import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user, Douglas Michael Rubino, is an English-speaking expat living in Turkey who has recently moved to
            Georgia. The conversation began with a translation request for a detailed complaint message to a Turkish
            moving company in Alanya, outlining significant damages and costs (33,200 TL total) resulting from the
            movers' failure to follow his specific packing instructions. The user had strategically placed items on the
            bed for packing and explicitly told them what not to pack from the closet, but communication breakdown
            between an English-speaking mover and his non-English-speaking colleague led to incorrect items being
            packed, including prescription medications that caused border detention issues.
        </Paragraph>
    </Chapter>
);
