import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--spacex-ipo-analysis-and-market-reaction--7fa923e8/.book';
import Cover from '../../../../../../.claude/.conversations/claude--spacex-ipo-analysis-and-market-reaction--7fa923e8/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--spacex-ipo-analysis-and-market-reaction--7fa923e8/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--spacex-ipo-analysis-and-market-reaction--7fa923e8/.table';
import June1720261 from '../../../../../../.claude/.conversations/claude--spacex-ipo-analysis-and-market-reaction--7fa923e8/1-june-17-2026';

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
