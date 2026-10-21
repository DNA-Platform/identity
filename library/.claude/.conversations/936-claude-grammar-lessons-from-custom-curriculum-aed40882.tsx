import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--grammar-lessons-from-custom-curriculum--aed40882/.cover.tsx';
import TheSynopsis from './claude--grammar-lessons-from-custom-curriculum--aed40882/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[18 February 2026](2026-02-18)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Grammar lessons from custom curriculum ]]( claude--Grammar lessons from custom curriculum--aed40882 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Grammar lessons from custom curriculum ]]( claude--Grammar lessons from custom curriculum--aed40882 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
