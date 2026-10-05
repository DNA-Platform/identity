import { About, Author, Autobiography, Chapter, Subject, Title } from '@dna-platform/public';
import { Cover } from './90-the-sheet~faces.tsx';

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
