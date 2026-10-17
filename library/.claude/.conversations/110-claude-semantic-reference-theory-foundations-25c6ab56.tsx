import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--semantic-reference-theory-foundations--25c6ab56/.cover.tsx';
import TheSynopsis from './claude--semantic-reference-theory-foundations--25c6ab56/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2025</Part>
        <Dated>
            <Date>[27 September 2025](2025-09-27)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Semantic reference theory foundations ]]( claude--Semantic reference theory foundations--25c6ab56 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 150 exchanges: <Means>$[[ Semantic reference theory foundations ]]( claude--Semantic reference theory foundations--25c6ab56 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
