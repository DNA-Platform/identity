import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--changing-flight-date--475574f6/.cover.tsx';
import TheSynopsis from '../.conversations/claude--changing-flight-date--475574f6/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[13 October 2026](2026-10-13)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Changing flight date ]]( claude--Changing flight date--475574f6 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 13 October 2026: <Means>$[[ Changing flight date ]]( claude--Changing flight date--475574f6 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
