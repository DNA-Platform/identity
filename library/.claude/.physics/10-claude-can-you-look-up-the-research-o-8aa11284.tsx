import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--can-you-look-up-the-research-o--8aa11284/.cover.tsx';
import TheSynopsis from '../.conversations/claude--can-you-look-up-the-research-o--8aa11284/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Can you look up the research o… ]]( claude--Can you look up the research o…--8aa11284 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 16 June 2026: <Means>$[[ Can you look up the research o… ]]( claude--Can you look up the research o…--8aa11284 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
