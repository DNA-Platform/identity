import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--safe-us-investment-options-and-i-bonds--8035e2e6/.book';
import Cover from '../../../../../../.claude/.conversations/claude--safe-us-investment-options-and-i-bonds--8035e2e6/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--safe-us-investment-options-and-i-bonds--8035e2e6/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--safe-us-investment-options-and-i-bonds--8035e2e6/.table';
import February1220261 from '../../../../../../.claude/.conversations/claude--safe-us-investment-options-and-i-bonds--8035e2e6/1-february-12-2026';
import February1420262 from '../../../../../../.claude/.conversations/claude--safe-us-investment-options-and-i-bonds--8035e2e6/2-february-14-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {February1220261()}
        {February1420262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
