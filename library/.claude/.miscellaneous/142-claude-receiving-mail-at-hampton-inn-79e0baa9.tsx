import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--receiving-mail-at-hampton-inn--79e0baa9/.cover.tsx';
import TheSynopsis from '../.conversations/claude--receiving-mail-at-hampton-inn--79e0baa9/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[27 April 2026](2026-04-27)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Receiving mail at Hampton Inn ]]( claude--Receiving mail at Hampton Inn--79e0baa9 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 27 April 2026: <Means>$[[ Receiving mail at Hampton Inn ]]( claude--Receiving mail at Hampton Inn--79e0baa9 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
