import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--reconnecting-with-jake-on-hallucinogen-research-opportunity--3c581089/.cover.tsx';
import TheSynopsis from '../.conversations/claude--reconnecting-with-jake-on-hallucinogen-research-opportunity--3c581089/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[16 June 2026](2026-06-16)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Reconnecting with Jake on hallucinogen research opportunity ]]( claude--Reconnecting with Jake on hallucinogen research opportunity--3c581089 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 16 June 2026: <Means>$[[ Reconnecting with Jake on hallucinogen research opportunity ]]( claude--Reconnecting with Jake on hallucinogen research opportunity--3c581089 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
