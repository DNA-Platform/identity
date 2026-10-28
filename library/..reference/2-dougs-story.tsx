import { Chapter, Means, Paragraph, Synopsis, Title } from '@dna-platform/public';
import { Caption } from '../.manual/20-the-bookshelf~code.tsx';
import { Volume } from '../.manual/19-the-cover~code.tsx';
import StoryCover from '../.librarian/.cover';
import StorySynopsis from '../.librarian/.synopsis';

export default () => (
    <Chapter>
        <Volume>{StoryCover()}</Volume>
        <Title>[[ Dougs Story ]]</Title>
        <Paragraph>
            <Caption />
            Begin here: <Means>$[[ Dougs Story ]]</Means> is the one book by its own subject.
        </Paragraph>
        <Synopsis>{StorySynopsis()}</Synopsis>
    </Chapter>
);
