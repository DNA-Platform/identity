import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--dominic-harbor-and-bays-maps--de3442a6/.book';
import Cover from '../../../../../../.claude/.conversations/claude--dominic-harbor-and-bays-maps--de3442a6/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--dominic-harbor-and-bays-maps--de3442a6/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--dominic-harbor-and-bays-maps--de3442a6/.table';
import October1520261 from '../../../../../../.claude/.conversations/claude--dominic-harbor-and-bays-maps--de3442a6/1-october-15-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {October1520261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
