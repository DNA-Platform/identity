import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--session-notes-for-disability-insurance-application--7f52e53d/.cover.tsx';
import TheSynopsis from '../.conversations/claude--session-notes-for-disability-insurance-application--7f52e53d/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
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
