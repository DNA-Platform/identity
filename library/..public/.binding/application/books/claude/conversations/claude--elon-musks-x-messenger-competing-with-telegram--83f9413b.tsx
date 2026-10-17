import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--elon-musks-x-messenger-competing-with-telegram--83f9413b/.book';
import Cover from '../../../../../../.claude/.conversations/claude--elon-musks-x-messenger-competing-with-telegram--83f9413b/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--elon-musks-x-messenger-competing-with-telegram--83f9413b/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--elon-musks-x-messenger-competing-with-telegram--83f9413b/.table';
import April1320261 from '../../../../../../.claude/.conversations/claude--elon-musks-x-messenger-competing-with-telegram--83f9413b/1-april-13-2026';

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
