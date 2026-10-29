import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--delta-chats-origins-and-encryption--11a0f63e/.cover.tsx';
import TheSynopsis from '../.conversations/claude--delta-chats-origins-and-encryption--11a0f63e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>Its conversations</Part>
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
