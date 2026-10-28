import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--role-based-typescript-type-system-architecture--6fc035ef/.cover.tsx';
import TheSynopsis from './claude--role-based-typescript-type-system-architecture--6fc035ef/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>November 2025</Part>
        <Dated>
            <Date>[6 November 2025](2025-11-06)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Role-based TypeScript type system architecture ]]( claude--Role-based TypeScript type system architecture--6fc035ef )</Title>
        <Paragraph>
            <Caption />
            A conversation, 160 exchanges: <Means>$[[ Role-based TypeScript type system architecture ]]( claude--Role-based TypeScript type system architecture--6fc035ef )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
