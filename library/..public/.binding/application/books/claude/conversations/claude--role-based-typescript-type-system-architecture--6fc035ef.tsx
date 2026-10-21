import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--role-based-typescript-type-system-architecture--6fc035ef/.book';
import Cover from '../../../../../../.claude/.conversations/claude--role-based-typescript-type-system-architecture--6fc035ef/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--role-based-typescript-type-system-architecture--6fc035ef/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--role-based-typescript-type-system-architecture--6fc035ef/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--role-based-typescript-type-system-architecture--6fc035ef/1-conversation';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {Conversation1()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
