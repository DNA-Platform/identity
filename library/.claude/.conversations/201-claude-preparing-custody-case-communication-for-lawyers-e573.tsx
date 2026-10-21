import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--preparing-custody-case-communication-for-lawyers--e5737827/.cover.tsx';
import TheSynopsis from './claude--preparing-custody-case-communication-for-lawyers--e5737827/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[18 January 2026](2026-01-18)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Preparing custody case communication for lawyers ]]( claude--Preparing custody case communication for lawyers--e5737827 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 54 exchanges: <Means>$[[ Preparing custody case communication for lawyers ]]( claude--Preparing custody case communication for lawyers--e5737827 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
