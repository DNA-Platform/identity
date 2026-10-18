import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--revoking-travel-bans-in-russia--db8acef2/.cover.tsx';
import TheSynopsis from './claude--revoking-travel-bans-in-russia--db8acef2/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>June 2026</Part>
        <Dated>
            <Date>[3 June 2026](2026-06-03)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Revoking travel bans in Russia ]]( claude--Revoking travel bans in Russia--db8acef2 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 56 exchanges: <Means>$[[ Revoking travel bans in Russia ]]( claude--Revoking travel bans in Russia--db8acef2 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
