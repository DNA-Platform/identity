import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import StorySynopsis from '../.librarian/.synopsis';

export default () => (
    <Chapter>
        <Title>[[ Dougs Story ]]</Title>
        <Paragraph>
            My own book, <Means>$[[ Dougs Story ]]</Means>, is the place to begin from.
        </Paragraph>
        <Synopsis>{StorySynopsis()}</Synopsis>
    </Chapter>
);
