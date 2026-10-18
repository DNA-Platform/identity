import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--experiment-specification-framework-for-wiki-based-market-res--6ad6437b/.cover.tsx';
import TheSynopsis from '../.conversations/claude--experiment-specification-framework-for-wiki-based-market-res--6ad6437b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Experiment specification framework for wiki-based market research ]]( claude--Experiment specification framework for wiki-based market research--6ad6437b )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 19 February 2026: <Means>$[[ Experiment specification framework for wiki-based market research ]]( claude--Experiment specification framework for wiki-based market research--6ad6437b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
