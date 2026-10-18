import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--eirian-and-ana--1ef30fc4/.cover.tsx';
import TheSynopsis from '../.conversations/claude--eirian-and-ana--1ef30fc4/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2025</Part>
        <Dated>
            <Date>[17 August 2025](2025-08-17)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Eirian &amp; Ana ]]( claude--Eirian &amp; Ana--1ef30fc4 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 17 August 2025: <Means>$[[ Eirian &amp; Ana ]]( claude--Eirian &amp; Ana--1ef30fc4 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
