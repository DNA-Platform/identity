import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--experiment-specification-framework-for-wiki-based-market-res--6ad6437b/.cover.tsx';
import TheSynopsis from './claude--experiment-specification-framework-for-wiki-based-market-res--6ad6437b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[19 February 2026](2026-02-19)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Experiment specification framework for wiki-based market research ]]( claude--Experiment specification framework for wiki-based market research--6ad6437b )</Title>
        <Paragraph>
            <Caption />
            A conversation, 30 exchanges: <Means>$[[ Experiment specification framework for wiki-based market research ]]( claude--Experiment specification framework for wiki-based market research--6ad6437b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
