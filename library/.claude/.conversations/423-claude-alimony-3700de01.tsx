import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--alimony--3700de01/.cover.tsx';
import TheSynopsis from './claude--alimony--3700de01/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[1 August 2026](2026-08-01)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Alimony ]]( claude--Alimony--3700de01 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 34 exchanges: <Means>$[[ Alimony ]]( claude--Alimony--3700de01 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
