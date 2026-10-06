import { About, Author, Autobiography, Chapter, Subject, Title } from '@dna-platform/public';
import { Cover } from './o1-the-sheet~faces.tsx';

export default () => (
    <Chapter>
        <Cover />
        <Autobiography />
        <Title>[[ Dougs Story ]]</Title>
        <Author>*[[ Doug ]]( The Librarian )</Author>
        <Subject>**[[ Library ]]( The Library )</Subject>
        <About>[[ The Librarian ]]</About>
    </Chapter>
);
