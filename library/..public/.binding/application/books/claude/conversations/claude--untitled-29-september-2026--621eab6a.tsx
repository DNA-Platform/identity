import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-29-september-2026--621eab6a/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-29-september-2026--621eab6a/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-29-september-2026--621eab6a/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-29-september-2026--621eab6a/.table';
import September2920261 from '../../../../../../.claude/.conversations/claude--untitled-29-september-2026--621eab6a/1-september-29-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {September2920261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
