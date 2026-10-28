import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--typescript-type-for-objects-with-prototypes--fe729f0d/.cover.tsx';
import TheSynopsis from './claude--typescript-type-for-objects-with-prototypes--fe729f0d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>November 2025</Part>
        <Dated>
            <Date>[4 November 2025](2025-11-04)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TypeScript type for objects with prototypes ]]( claude--TypeScript type for objects with prototypes--fe729f0d )</Title>
        <Paragraph>
            <Caption />
            A conversation, 168 exchanges: <Means>$[[ TypeScript type for objects with prototypes ]]( claude--TypeScript type for objects with prototypes--fe729f0d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
