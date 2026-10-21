import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--ok-ive-been-putting-somethin--ed86ea6d/.cover.tsx';
import TheSynopsis from './claude--ok-ive-been-putting-somethin--ed86ea6d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[21 April 2026](2026-04-21)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ OK, I’ve been putting somethin… ]]( claude--OK, I’ve been putting somethin…--ed86ea6d )</Title>
        <Paragraph>
            <Caption />
            A conversation, 6 exchanges: <Means>$[[ OK, I’ve been putting somethin… ]]( claude--OK, I’ve been putting somethin…--ed86ea6d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
