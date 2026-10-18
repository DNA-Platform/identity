import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-12-september-2026--16f38e2a/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-12-september-2026--16f38e2a/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-12-september-2026--16f38e2a/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-12-september-2026--16f38e2a/.table';
import September1220261 from '../../../../../../.claude/.conversations/claude--untitled-12-september-2026--16f38e2a/1-september-12-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {September1220261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
