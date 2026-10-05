import { Author, Chapter, Subject, Title } from '@dna-platform/public';
import { Cover } from './10-the-manual~faces.tsx';

export default () => (
    <Chapter>
        <Cover />
        <Title>[[ Dougs Reference Manual ]]</Title>
        <Author>*[[ The Librarian ]]</Author>
        <Subject>**[[ The Library ]]</Subject>
    </Chapter>
);
