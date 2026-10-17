import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--delta-chats-origins-and-encryption--11a0f63e/.cover.tsx';
import TheSynopsis from '../.conversations/claude--delta-chats-origins-and-encryption--11a0f63e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Delta Chat's origins and encryption ]]( claude--Delta Chat's origins and encryption--11a0f63e )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 23 March 2026: <Means>$[[ Delta Chat's origins and encryption ]]( claude--Delta Chat's origins and encryption--11a0f63e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
