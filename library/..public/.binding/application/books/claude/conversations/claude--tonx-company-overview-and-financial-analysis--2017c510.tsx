import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--tonx-company-overview-and-financial-analysis--2017c510/.book';
import Cover from '../../../../../../.claude/.conversations/claude--tonx-company-overview-and-financial-analysis--2017c510/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--tonx-company-overview-and-financial-analysis--2017c510/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--tonx-company-overview-and-financial-analysis--2017c510/.table';
import January2920261 from '../../../../../../.claude/.conversations/claude--tonx-company-overview-and-financial-analysis--2017c510/1-january-29-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January2920261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
