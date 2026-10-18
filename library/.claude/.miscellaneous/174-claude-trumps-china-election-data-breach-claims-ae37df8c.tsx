import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--trumps-china-election-data-breach-claims--ae37df8c/.cover.tsx';
import TheSynopsis from '../.conversations/claude--trumps-china-election-data-breach-claims--ae37df8c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Trump's China election data breach claims ]]( claude--Trump's China election data breach claims--ae37df8c )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 17 July 2026: <Means>$[[ Trump's China election data breach claims ]]( claude--Trump's China election data breach claims--ae37df8c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
