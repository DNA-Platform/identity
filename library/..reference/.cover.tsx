import { About, Author, Chapter, Subject, Title } from '@dna-platform/public';
import { Cover } from '../.manual/.book';

export default () => (
    <Chapter>
        <Cover />
        <Title>[[ Dougs Library ]]</Title>
        <Author>*[[ The Librarian ]]</Author>
        <Subject>**[[ The Library ]]</Subject>
        <About>[[ The Library ]]</About>
    </Chapter>
);
