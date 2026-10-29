import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--english-speaking-bipolar-support-groups-in-tbilisi--8dda474d/.cover.tsx';
import TheSynopsis from '../.conversations/claude--english-speaking-bipolar-support-groups-in-tbilisi--8dda474d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[2 July 2026](2026-07-02)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ English-speaking bipolar support groups in Tbilisi ]]( claude--English-speaking bipolar support groups in Tbilisi--8dda474d )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 2 July 2026: <Means>$[[ English-speaking bipolar support groups in Tbilisi ]]( claude--English-speaking bipolar support groups in Tbilisi--8dda474d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
