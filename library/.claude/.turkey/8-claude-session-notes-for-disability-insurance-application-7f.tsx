import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--session-notes-for-disability-insurance-application--7f52e53d/.cover.tsx';
import TheSynopsis from '../.conversations/claude--session-notes-for-disability-insurance-application--7f52e53d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[1 April 2026](2026-04-01)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Session notes for disability insurance application ]]( claude--Session notes for disability insurance application--7f52e53d )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 1 April 2026: <Means>$[[ Session notes for disability insurance application ]]( claude--Session notes for disability insurance application--7f52e53d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
