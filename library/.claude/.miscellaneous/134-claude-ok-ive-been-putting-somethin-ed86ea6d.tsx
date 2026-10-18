import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--ok-ive-been-putting-somethin--ed86ea6d/.cover.tsx';
import TheSynopsis from '../.conversations/claude--ok-ive-been-putting-somethin--ed86ea6d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ OK, I’ve been putting somethin… ]]( claude--OK, I’ve been putting somethin…--ed86ea6d )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 21 April 2026: <Means>$[[ OK, I’ve been putting somethin… ]]( claude--OK, I’ve been putting somethin…--ed86ea6d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
