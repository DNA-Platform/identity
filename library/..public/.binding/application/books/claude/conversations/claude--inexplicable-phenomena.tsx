import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--inexplicable-phenomena/.book';
import Cover from '../../../../../../.claude/.conversations/claude--inexplicable-phenomena/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--inexplicable-phenomena/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--inexplicable-phenomena/.table';
import July1320261 from '../../../../../../.claude/.conversations/claude--inexplicable-phenomena/1-july-13-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {July1320261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
