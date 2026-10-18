import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--russias-economic-tipping-point-and-financial-runway--8cd5f53d/.cover.tsx';
import TheSynopsis from '../.conversations/claude--russias-economic-tipping-point-and-financial-runway--8cd5f53d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Russia's economic tipping point and financial runway ]]( claude--Russia's economic tipping point and financial runway--8cd5f53d )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 14 March 2026: <Means>$[[ Russia's economic tipping point and financial runway ]]( claude--Russia's economic tipping point and financial runway--8cd5f53d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
