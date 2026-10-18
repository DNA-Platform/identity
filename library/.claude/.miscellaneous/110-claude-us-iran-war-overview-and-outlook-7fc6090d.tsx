import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--us-iran-war-overview-and-outlook--7fc6090d/.cover.tsx';
import TheSynopsis from '../.conversations/claude--us-iran-war-overview-and-outlook--7fc6090d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ US-Iran war overview and outlook ]]( claude--US-Iran war overview and outlook--7fc6090d )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 17 March 2026: <Means>$[[ US-Iran war overview and outlook ]]( claude--US-Iran war overview and outlook--7fc6090d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
