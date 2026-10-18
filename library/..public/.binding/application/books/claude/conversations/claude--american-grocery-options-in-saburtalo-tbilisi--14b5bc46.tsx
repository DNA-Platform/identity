import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--american-grocery-options-in-saburtalo-tbilisi--14b5bc46/.book';
import Cover from '../../../../../../.claude/.conversations/claude--american-grocery-options-in-saburtalo-tbilisi--14b5bc46/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--american-grocery-options-in-saburtalo-tbilisi--14b5bc46/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--american-grocery-options-in-saburtalo-tbilisi--14b5bc46/.table';
import June1520261 from '../../../../../../.claude/.conversations/claude--american-grocery-options-in-saburtalo-tbilisi--14b5bc46/1-june-15-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June1520261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
