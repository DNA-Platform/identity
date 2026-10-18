import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-12-january-2026--9362f976/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-12-january-2026--9362f976/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-12-january-2026--9362f976/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-12-january-2026--9362f976/.table';
import January1220261 from '../../../../../../.claude/.conversations/claude--untitled-12-january-2026--9362f976/1-january-12-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January1220261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
