import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/trumps-impact-on-ton-and-telegrams-resilience/.cover.tsx';
import TheSynopsis from '../.conversations/trumps-impact-on-ton-and-telegrams-resilience/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Trump's impact on TON and Telegram's resilience ]]</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 1 February 2026: <Means>$[[ Trump's impact on TON and Telegram's resilience ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
