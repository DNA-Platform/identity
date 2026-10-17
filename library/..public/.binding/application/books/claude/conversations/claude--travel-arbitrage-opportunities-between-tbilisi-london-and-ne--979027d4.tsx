import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--travel-arbitrage-opportunities-between-tbilisi-london-and-ne--979027d4/.book';
import Cover from '../../../../../../.claude/.conversations/claude--travel-arbitrage-opportunities-between-tbilisi-london-and-ne--979027d4/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--travel-arbitrage-opportunities-between-tbilisi-london-and-ne--979027d4/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--travel-arbitrage-opportunities-between-tbilisi-london-and-ne--979027d4/.table';
import August2720261 from '../../../../../../.claude/.conversations/claude--travel-arbitrage-opportunities-between-tbilisi-london-and-ne--979027d4/1-august-27-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {August2720261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
