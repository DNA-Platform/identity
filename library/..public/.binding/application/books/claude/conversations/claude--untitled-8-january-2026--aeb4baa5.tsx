import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-8-january-2026--aeb4baa5/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-8-january-2026--aeb4baa5/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-8-january-2026--aeb4baa5/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-8-january-2026--aeb4baa5/.table';
import January820261 from '../../../../../../.claude/.conversations/claude--untitled-8-january-2026--aeb4baa5/1-january-8-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January820261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
