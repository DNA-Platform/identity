import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--russias-economic-tipping-point-and-financial-runway--8cd5f53d/.cover.tsx';
import TheSynopsis from './claude--russias-economic-tipping-point-and-financial-runway--8cd5f53d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[14 March 2026](2026-03-14)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Russia's economic tipping point and financial runway ]]( claude--Russia's economic tipping point and financial runway--8cd5f53d )</Title>
        <Paragraph>
            <Caption />
            A conversation, 6 exchanges: <Means>$[[ Russia's economic tipping point and financial runway ]]( claude--Russia's economic tipping point and financial runway--8cd5f53d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
