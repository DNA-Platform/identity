import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--eirian-and-i-again--421d74bc/.cover.tsx';
import TheSynopsis from './claude--eirian-and-i-again--421d74bc/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[6 January 2026](2026-01-06)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Eirian &amp; I Again ]]( claude--Eirian &amp; I Again--421d74bc )</Title>
        <Paragraph>
            <Caption />
            A conversation, 18 exchanges: <Means>$[[ Eirian &amp; I Again ]]( claude--Eirian &amp; I Again--421d74bc )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
