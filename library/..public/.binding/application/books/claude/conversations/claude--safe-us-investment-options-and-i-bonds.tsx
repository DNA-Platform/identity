import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--safe-us-investment-options-and-i-bonds/.book';
import Cover from '../../../../../../.claude/.conversations/claude--safe-us-investment-options-and-i-bonds/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--safe-us-investment-options-and-i-bonds/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--safe-us-investment-options-and-i-bonds/.table';
import February1220261 from '../../../../../../.claude/.conversations/claude--safe-us-investment-options-and-i-bonds/1-february-12-2026';
import February1420262 from '../../../../../../.claude/.conversations/claude--safe-us-investment-options-and-i-bonds/2-february-14-2026';

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
