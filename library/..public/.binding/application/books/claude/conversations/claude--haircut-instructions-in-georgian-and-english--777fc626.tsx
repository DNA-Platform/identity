import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--haircut-instructions-in-georgian-and-english--777fc626/.book';
import Cover from '../../../../../../.claude/.conversations/claude--haircut-instructions-in-georgian-and-english--777fc626/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--haircut-instructions-in-georgian-and-english--777fc626/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--haircut-instructions-in-georgian-and-english--777fc626/.table';
import August1420261 from '../../../../../../.claude/.conversations/claude--haircut-instructions-in-georgian-and-english--777fc626/1-august-14-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {August1420261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
