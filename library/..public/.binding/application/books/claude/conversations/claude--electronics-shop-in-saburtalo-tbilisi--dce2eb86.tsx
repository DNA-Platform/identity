import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--electronics-shop-in-saburtalo-tbilisi--dce2eb86/.book';
import Cover from '../../../../../../.claude/.conversations/claude--electronics-shop-in-saburtalo-tbilisi--dce2eb86/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--electronics-shop-in-saburtalo-tbilisi--dce2eb86/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--electronics-shop-in-saburtalo-tbilisi--dce2eb86/.table';
import March720261 from '../../../../../../.claude/.conversations/claude--electronics-shop-in-saburtalo-tbilisi--dce2eb86/1-march-7-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {March720261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
