import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--russia-china-cryptocurrency-collaboration--ef849a35/.cover.tsx';
import TheSynopsis from './claude--russia-china-cryptocurrency-collaboration--ef849a35/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>November 2024</Part>
        <Dated>
            <Date>[7 November 2024](2024-11-07)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Russia-China Cryptocurrency Collaboration ]]( claude--Russia-China Cryptocurrency Collaboration--ef849a35 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ Russia-China Cryptocurrency Collaboration ]]( claude--Russia-China Cryptocurrency Collaboration--ef849a35 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
