import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--rothschild-pronunciation-across-languages--e5dd5c66/.cover.tsx';
import TheSynopsis from './claude--rothschild-pronunciation-across-languages--e5dd5c66/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>February 2026</Part>
        <Dated>
            <Date>[6 February 2026](2026-02-06)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Rothschild pronunciation across languages ]]( claude--Rothschild pronunciation across languages--e5dd5c66 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 4 exchanges: <Means>$[[ Rothschild pronunciation across languages ]]( claude--Rothschild pronunciation across languages--e5dd5c66 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
