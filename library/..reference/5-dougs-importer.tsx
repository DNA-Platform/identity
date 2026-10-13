import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Caption, Volume } from '../.manual/.book';
import ImporterCover from '../.importer/.cover';
import ImporterSynopsis from '../.importer/.synopsis';

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
