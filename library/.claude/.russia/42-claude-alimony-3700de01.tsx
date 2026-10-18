import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--alimony--3700de01/.cover.tsx';
import TheSynopsis from '../.conversations/claude--alimony--3700de01/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[6 July 2026](2026-07-06)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Alimony ]]( claude--Alimony--3700de01 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 6 July 2026: <Means>$[[ Alimony ]]( claude--Alimony--3700de01 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
