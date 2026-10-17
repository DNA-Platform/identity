import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--investing-around-ukraine-war-outcomes/.book';
import Cover from '../../../../../../.claude/.conversations/claude--investing-around-ukraine-war-outcomes/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--investing-around-ukraine-war-outcomes/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--investing-around-ukraine-war-outcomes/.table';
import July2820261 from '../../../../../../.claude/.conversations/claude--investing-around-ukraine-war-outcomes/1-july-28-2026';
import July2920262 from '../../../../../../.claude/.conversations/claude--investing-around-ukraine-war-outcomes/2-july-29-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {July2820261()}
        {July2920262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
