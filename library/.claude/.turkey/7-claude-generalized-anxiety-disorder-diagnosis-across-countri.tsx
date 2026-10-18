import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--generalized-anxiety-disorder-diagnosis-across-countries--c8269065/.cover.tsx';
import TheSynopsis from '../.conversations/claude--generalized-anxiety-disorder-diagnosis-across-countries--c8269065/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Generalized anxiety disorder diagnosis across countries ]]( claude--Generalized anxiety disorder diagnosis across countries--c8269065 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 5 March 2026: <Means>$[[ Generalized anxiety disorder diagnosis across countries ]]( claude--Generalized anxiety disorder diagnosis across countries--c8269065 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
