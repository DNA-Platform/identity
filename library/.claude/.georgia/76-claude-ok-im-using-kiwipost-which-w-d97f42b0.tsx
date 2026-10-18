import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--ok-im-using-kiwipost-which-w--d97f42b0/.cover.tsx';
import TheSynopsis from '../.conversations/claude--ok-im-using-kiwipost-which-w--d97f42b0/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ OK, I’m using KiwiPost which w… ]]( claude--OK, I’m using KiwiPost which w…--d97f42b0 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 15 July 2026: <Means>$[[ OK, I’m using KiwiPost which w… ]]( claude--OK, I’m using KiwiPost which w…--d97f42b0 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
