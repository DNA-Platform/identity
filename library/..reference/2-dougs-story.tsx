import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Coloured } from '../.manual/.book';
import StorySynopsis from '../.librarian/.synopsis';

export default () => (
    <Chapter>
        <Coloured>#e8590c</Coloured>
        <Title>[[ Dougs Story ]]</Title>
        <Paragraph>
            My own book, <Means>$[[ Dougs Story ]]</Means>, is the place to begin from.
        </Paragraph>
        <Synopsis>{StorySynopsis()}</Synopsis>
    </Chapter>
);
