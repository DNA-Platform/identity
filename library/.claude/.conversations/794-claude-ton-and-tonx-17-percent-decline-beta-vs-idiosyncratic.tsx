import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--ton-and-tonx-17-percent-decline-beta-vs-idiosyncratic-driver--a4e6d89e/.cover.tsx';
import TheSynopsis from './claude--ton-and-tonx-17-percent-decline-beta-vs-idiosyncratic-driver--a4e6d89e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[5 June 2026](2026-06-05)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ TON and TONX 17% decline: beta vs idiosyncratic drivers ]]( claude--TON and TONX 17% decline: beta vs idiosyncratic drivers--a4e6d89e )</Title>
        <Paragraph>
            <Caption />
            A conversation, 2 exchanges: <Means>$[[ TON and TONX 17% decline: beta vs idiosyncratic drivers ]]( claude--TON and TONX 17% decline: beta vs idiosyncratic drivers--a4e6d89e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
