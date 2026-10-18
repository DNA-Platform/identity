import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--us-iran-war-overview-and-outlook--7fc6090d/.cover.tsx';
import TheSynopsis from '../.conversations/claude--us-iran-war-overview-and-outlook--7fc6090d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[17 March 2026](2026-03-17)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ US-Iran war overview and outlook ]]( claude--US-Iran war overview and outlook--7fc6090d )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 17 March 2026: <Means>$[[ US-Iran war overview and outlook ]]( claude--US-Iran war overview and outlook--7fc6090d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
