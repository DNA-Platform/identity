import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--receiving-mail-at-hampton-inn--79e0baa9/.cover.tsx';
import TheSynopsis from './claude--receiving-mail-at-hampton-inn--79e0baa9/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>April 2026</Part>
        <Dated>
            <Date>[27 April 2026](2026-04-27)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Receiving mail at Hampton Inn ]]( claude--Receiving mail at Hampton Inn--79e0baa9 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 8 exchanges: <Means>$[[ Receiving mail at Hampton Inn ]]( claude--Receiving mail at Hampton Inn--79e0baa9 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
