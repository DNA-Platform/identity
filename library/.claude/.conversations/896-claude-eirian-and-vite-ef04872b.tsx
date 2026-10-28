import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
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
