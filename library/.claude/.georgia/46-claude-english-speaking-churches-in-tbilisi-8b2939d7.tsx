import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--english-speaking-churches-in-tbilisi--8b2939d7/.cover.tsx';
import TheSynopsis from '../.conversations/claude--english-speaking-churches-in-tbilisi--8b2939d7/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[2 April 2026](2026-04-02)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ English-speaking churches in Tbilisi ]]( claude--English-speaking churches in Tbilisi--8b2939d7 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 2 April 2026: <Means>$[[ English-speaking churches in Tbilisi ]]( claude--English-speaking churches in Tbilisi--8b2939d7 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
