import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/calculating-ownership-percentage-in-tonx/.book';
import Cover from '../../../../../../.claude/.conversations/calculating-ownership-percentage-in-tonx/.cover';
import Synopsis from '../../../../../../.claude/.conversations/calculating-ownership-percentage-in-tonx/.synopsis';
import Table from '../../../../../../.claude/.conversations/calculating-ownership-percentage-in-tonx/.table';
import May1220261 from '../../../../../../.claude/.conversations/calculating-ownership-percentage-in-tonx/1-may-12-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {May1220261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
