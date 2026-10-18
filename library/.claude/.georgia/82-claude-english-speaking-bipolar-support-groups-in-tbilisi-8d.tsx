import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--english-speaking-bipolar-support-groups-in-tbilisi--8dda474d/.cover.tsx';
import TheSynopsis from '../.conversations/claude--english-speaking-bipolar-support-groups-in-tbilisi--8dda474d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ English-speaking bipolar support groups in Tbilisi ]]( claude--English-speaking bipolar support groups in Tbilisi--8dda474d )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 2 July 2026: <Means>$[[ English-speaking bipolar support groups in Tbilisi ]]( claude--English-speaking bipolar support groups in Tbilisi--8dda474d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
