import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--russias-economic-tipping-point-and-financial-runway--8cd5f53d/.cover.tsx';
import TheSynopsis from '../.conversations/claude--russias-economic-tipping-point-and-financial-runway--8cd5f53d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[14 March 2026](2026-03-14)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Russia's economic tipping point and financial runway ]]( claude--Russia's economic tipping point and financial runway--8cd5f53d )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 14 March 2026: <Means>$[[ Russia's economic tipping point and financial runway ]]( claude--Russia's economic tipping point and financial runway--8cd5f53d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
