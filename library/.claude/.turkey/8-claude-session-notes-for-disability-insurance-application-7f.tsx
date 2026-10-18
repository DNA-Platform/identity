import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--session-notes-for-disability-insurance-application--7f52e53d/.cover.tsx';
import TheSynopsis from '../.conversations/claude--session-notes-for-disability-insurance-application--7f52e53d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Session notes for disability insurance application ]]( claude--Session notes for disability insurance application--7f52e53d )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 1 April 2026: <Means>$[[ Session notes for disability insurance application ]]( claude--Session notes for disability insurance application--7f52e53d )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
