import { Chapter, Means, Paragraph, Synopsis, Title, Date, Part } from '@dna-platform/public';
import { Brief, Dated, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--blog-biology-and-etymology-semantic-homeostasis--5fdfa75e/.cover.tsx';
import TheSynopsis from '../.conversations/claude--blog-biology-and-etymology-semantic-homeostasis--5fdfa75e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2026</Part>
        <Dated>
            <Date>[7 September 2026](2026-09-07)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Blog: Biology &amp; Etymology, Semantic Homeostasis ]]( claude--Blog: Biology &amp; Etymology, Semantic Homeostasis--5fdfa75e )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 7 September 2026: <Means>$[[ Blog: Biology &amp; Etymology, Semantic Homeostasis ]]( claude--Blog: Biology &amp; Etymology, Semantic Homeostasis--5fdfa75e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
