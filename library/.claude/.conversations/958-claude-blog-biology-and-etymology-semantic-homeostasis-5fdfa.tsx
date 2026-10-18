import { Chapter, Date, Means, Paragraph, Part, Synopsis, Title } from '@dna-platform/public';
import { Caption, Dated, Volume } from '../../.manual/.book';
import TheCover from './claude--blog-biology-and-etymology-semantic-homeostasis--5fdfa75e/.cover.tsx';
import TheSynopsis from './claude--blog-biology-and-etymology-semantic-homeostasis--5fdfa75e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Part>September 2026</Part>
        <Dated>
            <Date>[7 September 2026](2026-09-07)</Date>
        </Dated>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Blog: Biology &amp; Etymology, Semantic Homeostasis ]]( claude--Blog: Biology &amp; Etymology, Semantic Homeostasis--5fdfa75e )</Title>
        <Paragraph>
            <Caption />
            A conversation, 134 exchanges: <Means>$[[ Blog: Biology &amp; Etymology, Semantic Homeostasis ]]( claude--Blog: Biology &amp; Etymology, Semantic Homeostasis--5fdfa75e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
