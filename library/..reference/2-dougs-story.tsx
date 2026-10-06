import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Coloured } from '../.manual/.book';
import { Caption } from './o1-the-catalogue~views.tsx';
import StorySynopsis from '../.librarian/.synopsis';

export default () => (
    <Chapter>
        <Coloured>#d9a05b</Coloured>
        <Title>[[ Dougs Story ]]</Title>
        <Paragraph>
            <Caption />
            My own book, <Means>$[[ Dougs Story ]]</Means>, is the place to begin from.
        </Paragraph>
        <Synopsis>{StorySynopsis()}</Synopsis>
    </Chapter>
);
