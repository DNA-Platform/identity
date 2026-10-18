import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--semantics-of-the-name-seren--616d8834/.cover.tsx';
import TheSynopsis from './claude--semantics-of-the-name-seren--616d8834/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2026</Part>
        <Dated>
            <Date>[29 August 2026](2026-08-29)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Semantics of the name Seren ]]( claude--Semantics of the name Seren--616d8834 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 12 exchanges: <Means>$[[ Semantics of the name Seren ]]( claude--Semantics of the name Seren--616d8834 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
