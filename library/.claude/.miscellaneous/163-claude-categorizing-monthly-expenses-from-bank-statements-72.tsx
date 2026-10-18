import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--categorizing-monthly-expenses-from-bank-statements--7298cc94/.cover.tsx';
import TheSynopsis from '../.conversations/claude--categorizing-monthly-expenses-from-bank-statements--7298cc94/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[30 May 2026](2026-05-30)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Categorizing monthly expenses from bank statements ]]( claude--Categorizing monthly expenses from bank statements--7298cc94 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 30 May 2026: <Means>$[[ Categorizing monthly expenses from bank statements ]]( claude--Categorizing monthly expenses from bank statements--7298cc94 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
