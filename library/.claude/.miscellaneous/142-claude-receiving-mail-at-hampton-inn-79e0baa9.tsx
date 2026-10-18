import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--receiving-mail-at-hampton-inn--79e0baa9/.cover.tsx';
import TheSynopsis from '../.conversations/claude--receiving-mail-at-hampton-inn--79e0baa9/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Receiving mail at Hampton Inn ]]( claude--Receiving mail at Hampton Inn--79e0baa9 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 27 April 2026: <Means>$[[ Receiving mail at Hampton Inn ]]( claude--Receiving mail at Hampton Inn--79e0baa9 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
