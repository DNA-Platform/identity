import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--tonx-staking-rewards-and-share-price-disconnect--140a3ecf/.cover.tsx';
import TheSynopsis from './claude--tonx-staking-rewards-and-share-price-disconnect--140a3ecf/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[14 April 2026](2026-04-14)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TONX staking rewards and share price disconnect ]]( claude--TONX staking rewards and share price disconnect--140a3ecf )</Title>
        <Paragraph>
            <Caption />
            A conversation, 30 exchanges: <Means>$[[ TONX staking rewards and share price disconnect ]]( claude--TONX staking rewards and share price disconnect--140a3ecf )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
