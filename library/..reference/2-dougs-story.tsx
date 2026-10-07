import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Caption, Volume } from '../.manual/.book';
import StoryCover from '../.librarian/.cover';
import StorySynopsis from '../.librarian/.synopsis';

export default () => (
    <Chapter>
        <Volume>{StoryCover()}</Volume>
        <Title>[[ Dougs Story ]]</Title>
        <Paragraph>
            <Caption />
            My own book, <Means>$[[ Dougs Story ]]</Means>, is the place to begin from.
        </Paragraph>
        <Synopsis>{StorySynopsis()}</Synopsis>
    </Chapter>
);
