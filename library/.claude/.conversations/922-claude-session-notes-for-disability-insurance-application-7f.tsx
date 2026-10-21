import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--session-notes-for-disability-insurance-application--7f52e53d/.cover.tsx';
import TheSynopsis from './claude--session-notes-for-disability-insurance-application--7f52e53d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[1 April 2026](2026-04-01)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Session notes for disability insurance application ]]( claude--Session notes for disability insurance application--7f52e53d )</Title>
        <Paragraph>
            <Caption />
            A conversation, 6 exchanges: <Means>$[[ Session notes for disability insurance application ]]( claude--Session notes for disability insurance application--7f52e53d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
