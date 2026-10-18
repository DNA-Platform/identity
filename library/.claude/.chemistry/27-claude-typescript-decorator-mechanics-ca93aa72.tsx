import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--typescript-decorator-mechanics--ca93aa72/.cover.tsx';
import TheSynopsis from '../.conversations/claude--typescript-decorator-mechanics--ca93aa72/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TypeScript Decorator Mechanics ]]( claude--TypeScript Decorator Mechanics--ca93aa72 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 26 August 2025: <Means>$[[ TypeScript Decorator Mechanics ]]( claude--TypeScript Decorator Mechanics--ca93aa72 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
