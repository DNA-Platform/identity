import { About, Author, Autobiography, Chapter, Subject, Title } from '@dna-platform/public';
import { Cover } from '../.manual/.book';

export default () => (
    <Chapter>
        <Cover />
        <Autobiography />
        <Title>[[ Dougs Story ]]</Title>
        <Author>*[[ The Librarian ]]</Author>
        <Subject>**[[ The Library ]]</Subject>
        <About>[[ The Librarian ]]</About>
    </Chapter>
);
