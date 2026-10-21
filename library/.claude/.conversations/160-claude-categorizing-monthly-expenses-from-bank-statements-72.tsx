import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--categorizing-monthly-expenses-from-bank-statements--7298cc94/.cover.tsx';
import TheSynopsis from './claude--categorizing-monthly-expenses-from-bank-statements--7298cc94/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[30 May 2026](2026-05-30)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Categorizing monthly expenses from bank statements ]]( claude--Categorizing monthly expenses from bank statements--7298cc94 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 6 exchanges: <Means>$[[ Categorizing monthly expenses from bank statements ]]( claude--Categorizing monthly expenses from bank statements--7298cc94 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
