import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--georgian-drug-culture-and-legal-landscape--44c6711a/.cover.tsx';
import TheSynopsis from './claude--georgian-drug-culture-and-legal-landscape--44c6711a/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[20 April 2026](2026-04-20)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Georgian drug culture and legal landscape ]]( claude--Georgian drug culture and legal landscape--44c6711a )</Title>
        <Paragraph>
            <Caption />
            A conversation, 8 exchanges: <Means>$[[ Georgian drug culture and legal landscape ]]( claude--Georgian drug culture and legal landscape--44c6711a )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
