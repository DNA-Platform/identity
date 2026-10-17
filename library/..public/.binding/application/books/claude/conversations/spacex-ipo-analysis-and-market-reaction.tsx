import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/spacex-ipo-analysis-and-market-reaction/.book';
import Cover from '../../../../../../.claude/.conversations/spacex-ipo-analysis-and-market-reaction/.cover';
import Synopsis from '../../../../../../.claude/.conversations/spacex-ipo-analysis-and-market-reaction/.synopsis';
import Table from '../../../../../../.claude/.conversations/spacex-ipo-analysis-and-market-reaction/.table';
import June1720261 from '../../../../../../.claude/.conversations/spacex-ipo-analysis-and-market-reaction/1-june-17-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June1720261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
