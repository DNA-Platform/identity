import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--georgian-drug-culture-and-legal-landscape--44c6711a/.cover.tsx';
import TheSynopsis from '../.conversations/claude--georgian-drug-culture-and-legal-landscape--44c6711a/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Georgian drug culture and legal landscape ]]( claude--Georgian drug culture and legal landscape--44c6711a )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 20 April 2026: <Means>$[[ Georgian drug culture and legal landscape ]]( claude--Georgian drug culture and legal landscape--44c6711a )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
