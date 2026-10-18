import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-6-december-2025--fd9951af/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-6-december-2025--fd9951af/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-6-december-2025--fd9951af/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-6-december-2025--fd9951af/.table';
import December620251 from '../../../../../../.claude/.conversations/claude--untitled-6-december-2025--fd9951af/1-december-6-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {December620251()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
