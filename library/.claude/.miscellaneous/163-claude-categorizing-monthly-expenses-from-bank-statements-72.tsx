import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--categorizing-monthly-expenses-from-bank-statements--7298cc94/.cover.tsx';
import TheSynopsis from '../.conversations/claude--categorizing-monthly-expenses-from-bank-statements--7298cc94/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
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
