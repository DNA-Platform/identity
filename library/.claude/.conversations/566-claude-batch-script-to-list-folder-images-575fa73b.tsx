import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--batch-script-to-list-folder-images--575fa73b/.cover.tsx';
import TheSynopsis from './claude--batch-script-to-list-folder-images--575fa73b/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>December 2025</Part>
        <Dated>
            <Date>[17 December 2025](2025-12-17)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Batch script to list folder images ]]( claude--Batch script to list folder images--575fa73b )</Title>
        <Paragraph>
            <Caption />
            A conversation, 268 exchanges: <Means>$[[ Batch script to list folder images ]]( claude--Batch script to list folder images--575fa73b )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
