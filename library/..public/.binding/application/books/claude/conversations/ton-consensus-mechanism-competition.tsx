import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/ton-consensus-mechanism-competition/.book';
import Cover from '../../../../../../.claude/.conversations/ton-consensus-mechanism-competition/.cover';
import Synopsis from '../../../../../../.claude/.conversations/ton-consensus-mechanism-competition/.synopsis';
import Table from '../../../../../../.claude/.conversations/ton-consensus-mechanism-competition/.table';
import May1520261 from '../../../../../../.claude/.conversations/ton-consensus-mechanism-competition/1-may-15-2026';
import May1620262 from '../../../../../../.claude/.conversations/ton-consensus-mechanism-competition/2-may-16-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {May1520261()}
        {May1620262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
