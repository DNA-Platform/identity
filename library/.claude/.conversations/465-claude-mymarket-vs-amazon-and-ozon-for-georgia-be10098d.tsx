import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--mymarket-vs-amazon-and-ozon-for-georgia--be10098d/.cover.tsx';
import TheSynopsis from './claude--mymarket-vs-amazon-and-ozon-for-georgia--be10098d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[1 February 2026](2026-02-01)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ MyMarket vs Amazon and Ozon for Georgia ]]( claude--MyMarket vs Amazon and Ozon for Georgia--be10098d )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ MyMarket vs Amazon and Ozon for Georgia ]]( claude--MyMarket vs Amazon and Ozon for Georgia--be10098d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
