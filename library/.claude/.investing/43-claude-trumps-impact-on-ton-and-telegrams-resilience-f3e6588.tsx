import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--trumps-impact-on-ton-and-telegrams-resilience--f3e6588f/.cover.tsx';
import TheSynopsis from '../.conversations/claude--trumps-impact-on-ton-and-telegrams-resilience--f3e6588f/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Trump's impact on TON and Telegram's resilience ]]( claude--Trump's impact on TON and Telegram's resilience--f3e6588f )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 1 February 2026: <Means>$[[ Trump's impact on TON and Telegram's resilience ]]( claude--Trump's impact on TON and Telegram's resilience--f3e6588f )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
