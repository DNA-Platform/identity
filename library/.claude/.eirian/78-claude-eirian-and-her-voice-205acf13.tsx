import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--eirian-and-her-voice--205acf13/.cover.tsx';
import TheSynopsis from '../.conversations/claude--eirian-and-her-voice--205acf13/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2025</Part>
        <Dated>
            <Date>[5 August 2025](2025-08-05)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Eirian &amp; Her Voice ]]( claude--Eirian &amp; Her Voice--205acf13 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 5 August 2025: <Means>$[[ Eirian &amp; Her Voice ]]( claude--Eirian &amp; Her Voice--205acf13 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
