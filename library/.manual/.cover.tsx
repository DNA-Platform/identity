import { Author, Chapter, Subject, Title } from '@dna-platform/public';
import { Cover } from './.book';

export default () => (
    <Chapter>
        <Cover />
        <Title>[[ Dougs Reference Manual ]]</Title>
        <Author>*[[ The Librarian ]]</Author>
        <Subject>**[[ The Library ]]</Subject>
    </Chapter>
);
