import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--reconnecting-with-jake-on-hallucinogen-research-opportunity--3c581089/.cover.tsx';
import TheSynopsis from './claude--reconnecting-with-jake-on-hallucinogen-research-opportunity--3c581089/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[16 June 2026](2026-06-16)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Reconnecting with Jake on hallucinogen research opportunity ]]( claude--Reconnecting with Jake on hallucinogen research opportunity--3c581089 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 16 exchanges: <Means>$[[ Reconnecting with Jake on hallucinogen research opportunity ]]( claude--Reconnecting with Jake on hallucinogen research opportunity--3c581089 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
