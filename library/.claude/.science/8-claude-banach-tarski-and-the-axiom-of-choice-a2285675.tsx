import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--banach-tarski-and-the-axiom-of-choice--a2285675/.cover.tsx';
import TheSynopsis from '../.conversations/claude--banach-tarski-and-the-axiom-of-choice--a2285675/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[15 July 2026](2026-07-15)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Banach-Tarski and the axiom of choice ]]( claude--Banach-Tarski and the axiom of choice--a2285675 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 15 July 2026: <Means>$[[ Banach-Tarski and the axiom of choice ]]( claude--Banach-Tarski and the axiom of choice--a2285675 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
