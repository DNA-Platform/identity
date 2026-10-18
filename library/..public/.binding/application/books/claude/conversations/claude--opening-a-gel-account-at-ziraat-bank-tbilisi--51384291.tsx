import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--opening-a-gel-account-at-ziraat-bank-tbilisi--51384291/.book';
import Cover from '../../../../../../.claude/.conversations/claude--opening-a-gel-account-at-ziraat-bank-tbilisi--51384291/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--opening-a-gel-account-at-ziraat-bank-tbilisi--51384291/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--opening-a-gel-account-at-ziraat-bank-tbilisi--51384291/.table';
import February1820261 from '../../../../../../.claude/.conversations/claude--opening-a-gel-account-at-ziraat-bank-tbilisi--51384291/1-february-18-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {February1820261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
