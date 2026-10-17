import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--trumps-impact-on-ton-and-telegrams-resilience--f3e6588f/.cover.tsx';
import TheSynopsis from './claude--trumps-impact-on-ton-and-telegrams-resilience--f3e6588f/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[1 February 2026](2026-02-01)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Trump's impact on TON and Telegram's resilience ]]( claude--Trump's impact on TON and Telegram's resilience--f3e6588f )</Title>
        <Paragraph>
            <Caption />
            A conversation, 6 exchanges: <Means>$[[ Trump's impact on TON and Telegram's resilience ]]( claude--Trump's impact on TON and Telegram's resilience--f3e6588f )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
