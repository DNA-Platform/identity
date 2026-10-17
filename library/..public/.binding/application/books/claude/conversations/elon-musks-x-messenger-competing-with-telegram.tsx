import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/elon-musks-x-messenger-competing-with-telegram/.book';
import Cover from '../../../../../../.claude/.conversations/elon-musks-x-messenger-competing-with-telegram/.cover';
import Synopsis from '../../../../../../.claude/.conversations/elon-musks-x-messenger-competing-with-telegram/.synopsis';
import Table from '../../../../../../.claude/.conversations/elon-musks-x-messenger-competing-with-telegram/.table';
import April1320261 from '../../../../../../.claude/.conversations/elon-musks-x-messenger-competing-with-telegram/1-april-13-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {April1320261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
