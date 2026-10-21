import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--english-speaking-bipolar-support-groups-in-tbilisi--8dda474d/.cover.tsx';
import TheSynopsis from './claude--english-speaking-bipolar-support-groups-in-tbilisi--8dda474d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[2 July 2026](2026-07-02)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ English-speaking bipolar support groups in Tbilisi ]]( claude--English-speaking bipolar support groups in Tbilisi--8dda474d )</Title>
        <Paragraph>
            <Caption />
            A conversation, 22 exchanges: <Means>$[[ English-speaking bipolar support groups in Tbilisi ]]( claude--English-speaking bipolar support groups in Tbilisi--8dda474d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
