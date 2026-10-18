import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--dr-helga-doustafost--c5056deb/.cover.tsx';
import TheSynopsis from '../.conversations/claude--dr-helga-doustafost--c5056deb/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Dr. Helga d’Oustafost ]]( claude--Dr.. Helga d’Oustafost--c5056deb )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 5 February 2026: <Means>$[[ Dr. Helga d’Oustafost ]]( claude--Dr.. Helga d’Oustafost--c5056deb )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
