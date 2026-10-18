import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--settling-in-georgia--2aead262/.cover.tsx';
import TheSynopsis from './claude--settling-in-georgia--2aead262/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[14 January 2026](2026-01-14)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Settling in Georgia ]]( claude--Settling in Georgia--2aead262 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 71 exchanges: <Means>$[[ Settling in Georgia ]]( claude--Settling in Georgia--2aead262 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
