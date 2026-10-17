import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--semantic-reference-theory-development--00523af2/.cover.tsx';
import TheSynopsis from './claude--semantic-reference-theory-development--00523af2/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2025</Part>
        <Dated>
            <Date>[1 September 2025](2025-09-01)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Semantic Reference Theory Development ]]( claude--Semantic Reference Theory Development--00523af2 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 32 exchanges: <Means>$[[ Semantic Reference Theory Development ]]( claude--Semantic Reference Theory Development--00523af2 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
