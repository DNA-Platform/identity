import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--delta-chats-origins-and-encryption--11a0f63e/.cover.tsx';
import TheSynopsis from '../.conversations/claude--delta-chats-origins-and-encryption--11a0f63e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>March 2026</Part>
        <Dated>
            <Date>[23 March 2026](2026-03-23)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Delta Chat's origins and encryption ]]( claude--Delta Chat's origins and encryption--11a0f63e )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 23 March 2026: <Means>$[[ Delta Chat's origins and encryption ]]( claude--Delta Chat's origins and encryption--11a0f63e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
