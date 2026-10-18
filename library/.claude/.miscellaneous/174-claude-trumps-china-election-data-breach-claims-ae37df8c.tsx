import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--trumps-china-election-data-breach-claims--ae37df8c/.cover.tsx';
import TheSynopsis from '../.conversations/claude--trumps-china-election-data-breach-claims--ae37df8c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[17 July 2026](2026-07-17)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Trump's China election data breach claims ]]( claude--Trump's China election data breach claims--ae37df8c )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 17 July 2026: <Means>$[[ Trump's China election data breach claims ]]( claude--Trump's China election data breach claims--ae37df8c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
