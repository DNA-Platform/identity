import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief } from '../../.manual/10-the-manual~annotations.tsx';
import { Dated } from '../../.manual/4-the-date~code.tsx';
import { Volume } from '../../.manual/19-the-cover~code.tsx';
import TheCover from '../.conversations/claude--trumps-impact-on-ton-and-telegrams-resilience--f3e6588f/.cover.tsx';
import TheSynopsis from '../.conversations/claude--trumps-impact-on-ton-and-telegrams-resilience--f3e6588f/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[1 February 2026](2026-02-01)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Trump's impact on TON and Telegram's resilience ]]( claude--Trump's impact on TON and Telegram's resilience--f3e6588f )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 1 February 2026: <Means>$[[ Trump's impact on TON and Telegram's resilience ]]( claude--Trump's impact on TON and Telegram's resilience--f3e6588f )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
