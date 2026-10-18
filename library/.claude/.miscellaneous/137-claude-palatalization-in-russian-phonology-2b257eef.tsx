import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--palatalization-in-russian-phonology--2b257eef/.cover.tsx';
import TheSynopsis from '../.conversations/claude--palatalization-in-russian-phonology--2b257eef/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Palatalization in Russian phonology ]]( claude--Palatalization in Russian phonology--2b257eef )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 23 April 2026: <Means>$[[ Palatalization in Russian phonology ]]( claude--Palatalization in Russian phonology--2b257eef )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
