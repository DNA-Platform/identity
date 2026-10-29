import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--borderline-personality-disorder-symptoms--58aa30f6/.cover.tsx';
import TheSynopsis from '../.conversations/claude--borderline-personality-disorder-symptoms--58aa30f6/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[27 January 2026](2026-01-27)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Borderline personality disorder symptoms ]]( claude--Borderline personality disorder symptoms--58aa30f6 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 27 January 2026: <Means>$[[ Borderline personality disorder symptoms ]]( claude--Borderline personality disorder symptoms--58aa30f6 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
