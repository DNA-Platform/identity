import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--nikolai-durovs-research-at-steklov-institute--6946d851/.cover.tsx';
import TheSynopsis from './claude--nikolai-durovs-research-at-steklov-institute--6946d851/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[31 January 2026](2026-01-31)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Nikolai Durov's research at Steklov Institute ]]( claude--Nikolai Durov's research at Steklov Institute--6946d851 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 88 exchanges: <Means>$[[ Nikolai Durov's research at Steklov Institute ]]( claude--Nikolai Durov's research at Steklov Institute--6946d851 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
