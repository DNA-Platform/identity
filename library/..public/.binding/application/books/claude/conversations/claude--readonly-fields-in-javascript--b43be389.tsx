import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--readonly-fields-in-javascript--b43be389/.book';
import Cover from '../../../../../../.claude/.conversations/claude--readonly-fields-in-javascript--b43be389/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--readonly-fields-in-javascript--b43be389/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--readonly-fields-in-javascript--b43be389/.table';
import November320251 from '../../../../../../.claude/.conversations/claude--readonly-fields-in-javascript--b43be389/1-november-3-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {November320251()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
