import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--categorizing-monthly-expenses-from-bank-statements--7298cc94/.cover.tsx';
import TheSynopsis from '../.conversations/claude--categorizing-monthly-expenses-from-bank-statements--7298cc94/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Categorizing monthly expenses from bank statements ]]( claude--Categorizing monthly expenses from bank statements--7298cc94 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 30 May 2026: <Means>$[[ Categorizing monthly expenses from bank statements ]]( claude--Categorizing monthly expenses from bank statements--7298cc94 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
