import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--mymarket-vs-amazon-and-ozon-for-georgia--be10098d/.cover.tsx';
import TheSynopsis from '../.conversations/claude--mymarket-vs-amazon-and-ozon-for-georgia--be10098d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
        <Dated>
            <Date>[1 February 2026](2026-02-01)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ MyMarket vs Amazon and Ozon for Georgia ]]( claude--MyMarket vs Amazon and Ozon for Georgia--be10098d )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 1 February 2026: <Means>$[[ MyMarket vs Amazon and Ozon for Georgia ]]( claude--MyMarket vs Amazon and Ozon for Georgia--be10098d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
