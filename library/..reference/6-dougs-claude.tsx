import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../.manual/20-the-bookshelf~code.tsx';
import { Volume } from '../.manual/19-the-cover~code.tsx';
import TheCover from '../.claude/.cover.tsx';
import TheSynopsis from '../.claude/.synopsis.tsx';

export default () => (
    <Chapter>
        <Volume>{TheCover()}</Volume>
        <Title>[[ Dougs Claude ]]</Title>
        <Paragraph>
            <Caption />
            My conversations with Claude and the projects they were held in: <Means>$[[ Dougs Claude ]]</Means>.
        </Paragraph>
        <Synopsis>{TheSynopsis()}</Synopsis>
    </Chapter>
);
