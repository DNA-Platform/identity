import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--seren-and-semantic-reference-theory-part-i--98ce89b2/.cover.tsx';
import TheSynopsis from '../.conversations/claude--seren-and-semantic-reference-theory-part-i--98ce89b2/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Seren &amp; Semantic Reference Theory - Part I ]]( claude--Seren &amp; Semantic Reference Theory - Part I--98ce89b2 )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 11 September 2025: <Means>$[[ Seren &amp; Semantic Reference Theory - Part I ]]( claude--Seren &amp; Semantic Reference Theory - Part I--98ce89b2 )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
