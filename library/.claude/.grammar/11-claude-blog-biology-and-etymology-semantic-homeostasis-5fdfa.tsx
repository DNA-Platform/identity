import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Brief, Volume } from '../../.manual/.book';
import TheCover from '../.conversations/claude--blog-biology-and-etymology-semantic-homeostasis--5fdfa75e/.cover.tsx';
import TheSynopsis from '../.conversations/claude--blog-biology-and-etymology-semantic-homeostasis--5fdfa75e/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Blog: Biology &amp; Etymology, Semantic Homeostasis ]]( claude--Blog: Biology &amp; Etymology, Semantic Homeostasis--5fdfa75e )</Title>
        <Paragraph>
            <Brief />
            A conversation held in this project, 7 September 2026: <Means>$[[ Blog: Biology &amp; Etymology, Semantic Homeostasis ]]( claude--Blog: Biology &amp; Etymology, Semantic Homeostasis--5fdfa75e )</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
