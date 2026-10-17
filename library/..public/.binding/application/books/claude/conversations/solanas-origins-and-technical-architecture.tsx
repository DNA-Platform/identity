import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/solanas-origins-and-technical-architecture/.book';
import Cover from '../../../../../../.claude/.conversations/solanas-origins-and-technical-architecture/.cover';
import Synopsis from '../../../../../../.claude/.conversations/solanas-origins-and-technical-architecture/.synopsis';
import Table from '../../../../../../.claude/.conversations/solanas-origins-and-technical-architecture/.table';
import February1220261 from '../../../../../../.claude/.conversations/solanas-origins-and-technical-architecture/1-february-12-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {February1220261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
