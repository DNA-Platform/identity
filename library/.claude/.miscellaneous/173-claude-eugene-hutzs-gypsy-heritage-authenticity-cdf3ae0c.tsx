import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--eugene-hutzs-gypsy-heritage-authenticity--cdf3ae0c/.cover.tsx';
import TheSynopsis from '../.conversations/claude--eugene-hutzs-gypsy-heritage-authenticity--cdf3ae0c/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Eugene Hutz's gypsy heritage authenticity ]]( claude--Eugene Hutz's gypsy heritage authenticity--cdf3ae0c )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 7 June 2026: <Means>$[[ Eugene Hutz's gypsy heritage authenticity ]]( claude--Eugene Hutz's gypsy heritage authenticity--cdf3ae0c )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
