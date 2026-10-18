import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--eirian-and-vite--ef04872b/.cover.tsx';
import TheSynopsis from './claude--eirian-and-vite--ef04872b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2025</Part>
        <Dated>
            <Date>[14 August 2025](2025-08-14)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Eirian &amp; Vite ]]( claude--Eirian &amp; Vite--ef04872b )</Title>
        <Paragraph>
            <Caption />
            A conversation, 84 exchanges: <Means>$[[ Eirian &amp; Vite ]]( claude--Eirian &amp; Vite--ef04872b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
