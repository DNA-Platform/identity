import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../../.manual/20-the-bookshelf~code.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
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
