import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--semantic-reference-theory-framework--3e16e3a5/.cover.tsx';
import TheSynopsis from './claude--semantic-reference-theory-framework--3e16e3a5/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>August 2025</Part>
        <Dated>
            <Date>[29 August 2025](2025-08-29)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Semantic Reference Theory Framework ]]( claude--Semantic Reference Theory Framework--3e16e3a5 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 84 exchanges: <Means>$[[ Semantic Reference Theory Framework ]]( claude--Semantic Reference Theory Framework--3e16e3a5 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
