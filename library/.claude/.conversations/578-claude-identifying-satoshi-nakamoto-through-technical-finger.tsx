import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--identifying-satoshi-nakamoto-through-technical-fingerprints--951d18a9/.cover.tsx';
import TheSynopsis from './claude--identifying-satoshi-nakamoto-through-technical-fingerprints--951d18a9/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>January 2026</Part>
        <Dated>
            <Date>[11 January 2026](2026-01-11)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Identifying Satoshi Nakamoto through technical fingerprints ]]( claude--Identifying Satoshi Nakamoto through technical fingerprints--951d18a9 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 14 exchanges: <Means>$[[ Identifying Satoshi Nakamoto through technical fingerprints ]]( claude--Identifying Satoshi Nakamoto through technical fingerprints--951d18a9 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
