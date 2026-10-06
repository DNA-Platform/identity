import { Author, Chapter, Subject, Title } from '@dna-platform/public';
import { TopBar } from '../.manual/.book';
import { Cover } from './o5-the-frame~faces.tsx';

export default () => (
    <Chapter>
        <Cover />
        <TopBar />
        <Title>[[ Dougs Design ]]</Title>
        <Author>*[[ The Librarian ]]</Author>
        <Subject>**[[ The Library ]]</Subject>
    </Chapter>
);
