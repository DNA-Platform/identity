import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--transporting-cats-from-alanya-to-sarp-border-crossing--b0b0e758/.cover.tsx';
import TheSynopsis from '../.conversations/claude--transporting-cats-from-alanya-to-sarp-border-crossing--b0b0e758/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[16 January 2026](2026-01-16)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Transporting cats from Alanya to Sarp border crossing ]]( claude--Transporting cats from Alanya to Sarp border crossing--b0b0e758 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 16 January 2026: <Means>$[[ Transporting cats from Alanya to Sarp border crossing ]]( claude--Transporting cats from Alanya to Sarp border crossing--b0b0e758 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
