import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--semi-synthetic-organisms-with-unnatural-base-pairs--1f66d32d/.cover.tsx';
import TheSynopsis from './claude--semi-synthetic-organisms-with-unnatural-base-pairs--1f66d32d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>July 2026</Part>
        <Dated>
            <Date>[2 July 2026](2026-07-02)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Semi-synthetic organisms with unnatural base pairs ]]( claude--Semi-synthetic organisms with unnatural base pairs--1f66d32d )</Title>
        <Paragraph>
            <Caption />
            A conversation, 60 exchanges: <Means>$[[ Semi-synthetic organisms with unnatural base pairs ]]( claude--Semi-synthetic organisms with unnatural base pairs--1f66d32d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
