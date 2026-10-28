import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../.manual/20-the-bookshelf~code.tsx';
import { Volume } from '../.manual/19-the-cover~code.tsx';
import ImporterCover from '../importer/.cover';
import ImporterSynopsis from '../importer/.synopsis';

export default () => (
    <Chapter>
        <Volume>{ImporterCover()}</Volume>
        <Title>[[ Dougs Importer ]]</Title>
        <Paragraph>
            <Caption />
            How my conversations get in, and the code that brings them: <Means>$[[ Dougs Importer ]]</Means>.
        </Paragraph>
        <Synopsis>{ImporterSynopsis()}</Synopsis>
    </Chapter>
);
