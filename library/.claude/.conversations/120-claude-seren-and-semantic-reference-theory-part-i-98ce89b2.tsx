import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--seren-and-semantic-reference-theory-part-i--98ce89b2/.cover.tsx';
import TheSynopsis from './claude--seren-and-semantic-reference-theory-part-i--98ce89b2/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2025</Part>
        <Dated>
            <Date>[13 September 2025](2025-09-13)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Seren &amp; Semantic Reference Theory - Part I ]]( claude--Seren &amp; Semantic Reference Theory - Part I--98ce89b2 )</Title>
        <Paragraph>
            <Caption />
            A conversation, 178 exchanges: <Means>$[[ Seren &amp; Semantic Reference Theory - Part I ]]( claude--Seren &amp; Semantic Reference Theory - Part I--98ce89b2 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
