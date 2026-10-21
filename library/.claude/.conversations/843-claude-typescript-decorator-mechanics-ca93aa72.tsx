import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--typescript-decorator-mechanics--ca93aa72/.cover.tsx';
import TheSynopsis from './claude--typescript-decorator-mechanics--ca93aa72/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2025</Part>
        <Dated>
            <Date>[28 August 2025](2025-08-28)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TypeScript Decorator Mechanics ]]( claude--TypeScript Decorator Mechanics--ca93aa72 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 122 exchanges: <Means>$[[ TypeScript Decorator Mechanics ]]( claude--TypeScript Decorator Mechanics--ca93aa72 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
