import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--palatalization-in-russian-phonology--2b257eef/.cover.tsx';
import TheSynopsis from './claude--palatalization-in-russian-phonology--2b257eef/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[23 April 2026](2026-04-23)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Palatalization in Russian phonology ]]( claude--Palatalization in Russian phonology--2b257eef )</Title>
        <Paragraph>
            <Caption />
            A conversation, 8 exchanges: <Means>$[[ Palatalization in Russian phonology ]]( claude--Palatalization in Russian phonology--2b257eef )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
