import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from './claude--returning-undefined-when-closing-typescript-class--80ecd7b9/.cover.tsx';
import TheSynopsis from './claude--returning-undefined-when-closing-typescript-class--80ecd7b9/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2025</Part>
        <Dated>
            <Date>[10 January 2025](2025-01-10)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Returning undefined when closing TypeScript class ]]( claude--Returning undefined when closing TypeScript class--80ecd7b9 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 10 exchanges: <Means>$[[ Returning undefined when closing TypeScript class ]]( claude--Returning undefined when closing TypeScript class--80ecd7b9 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
