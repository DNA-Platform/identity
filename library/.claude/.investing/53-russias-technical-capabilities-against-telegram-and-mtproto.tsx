import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/russias-technical-capabilities-against-telegram-and-mtproto/.cover.tsx';
import TheSynopsis from '../.conversations/russias-technical-capabilities-against-telegram-and-mtproto/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Russia's technical capabilities against Telegram and MTProto ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 27 February 2026: <Means>$[[ Russia's technical capabilities against Telegram and MTProto ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
