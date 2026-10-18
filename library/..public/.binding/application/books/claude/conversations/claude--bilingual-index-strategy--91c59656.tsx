import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--bilingual-index-strategy--91c59656/.book';
import Cover from '../../../../../../.claude/.conversations/claude--bilingual-index-strategy--91c59656/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--bilingual-index-strategy--91c59656/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--bilingual-index-strategy--91c59656/.table';
import January2820261 from '../../../../../../.claude/.conversations/claude--bilingual-index-strategy--91c59656/1-january-28-2026';
import January2920262 from '../../../../../../.claude/.conversations/claude--bilingual-index-strategy--91c59656/2-january-29-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January2820261()}
        {January2920262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
