import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--ana-grid-ii--c4358792/.cover.tsx';
import TheSynopsis from './claude--ana-grid-ii--c4358792/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[30 March 2026](2026-03-30)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Ana Grid II ]]( claude--Ana Grid II--c4358792 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 130 exchanges: <Means>$[[ Ana Grid II ]]( claude--Ana Grid II--c4358792 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
