import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/travel-arbitrage-opportunities-between-tbilisi-london-and-ne/.book';
import Cover from '../../../../../../.claude/.conversations/travel-arbitrage-opportunities-between-tbilisi-london-and-ne/.cover';
import Synopsis from '../../../../../../.claude/.conversations/travel-arbitrage-opportunities-between-tbilisi-london-and-ne/.synopsis';
import Table from '../../../../../../.claude/.conversations/travel-arbitrage-opportunities-between-tbilisi-london-and-ne/.table';
import August2720261 from '../../../../../../.claude/.conversations/travel-arbitrage-opportunities-between-tbilisi-london-and-ne/1-august-27-2026';

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
