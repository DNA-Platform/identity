import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--ton-price-collapse-analysis--301d9ba2/.cover.tsx';
import TheSynopsis from './claude--ton-price-collapse-analysis--301d9ba2/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>May 2026</Part>
        <Dated>
            <Date>[23 May 2026](2026-05-23)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TON price collapse analysis ]]( claude--TON price collapse analysis--301d9ba2 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 42 exchanges: <Means>$[[ TON price collapse analysis ]]( claude--TON price collapse analysis--301d9ba2 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
