import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/using-a-telegram-username-on-a-new-account/.cover.tsx';
import TheSynopsis from '../.conversations/using-a-telegram-username-on-a-new-account/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Using a Telegram username on a new account ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 10 August 2026: <Means>$[[ Using a Telegram username on a new account ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
