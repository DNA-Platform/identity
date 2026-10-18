import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--us-iran-war-overview-and-outlook--7fc6090d/.cover.tsx';
import TheSynopsis from './claude--us-iran-war-overview-and-outlook--7fc6090d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[21 March 2026](2026-03-21)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ US-Iran war overview and outlook ]]( claude--US-Iran war overview and outlook--7fc6090d )</Title>
        <Paragraph>
            <Caption />
            A conversation, 16 exchanges: <Means>$[[ US-Iran war overview and outlook ]]( claude--US-Iran war overview and outlook--7fc6090d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
