import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--using-a-telegram-username-on-a-new-account--dd7f5daa/.cover.tsx';
import TheSynopsis from '../.conversations/claude--using-a-telegram-username-on-a-new-account--dd7f5daa/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Using a Telegram username on a new account ]]( claude--Using a Telegram username on a new account--dd7f5daa )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 10 August 2026: <Means>$[[ Using a Telegram username on a new account ]]( claude--Using a Telegram username on a new account--dd7f5daa )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
