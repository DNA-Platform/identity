import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--sunny-kings-innovations-in-ton-and-monad/.book';
import Cover from '../../../../../../.claude/.conversations/claude--sunny-kings-innovations-in-ton-and-monad/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--sunny-kings-innovations-in-ton-and-monad/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--sunny-kings-innovations-in-ton-and-monad/.table';
import February120261 from '../../../../../../.claude/.conversations/claude--sunny-kings-innovations-in-ton-and-monad/1-february-1-2026';
import February220262 from '../../../../../../.claude/.conversations/claude--sunny-kings-innovations-in-ton-and-monad/2-february-2-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {February120261()}
        {February220262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
