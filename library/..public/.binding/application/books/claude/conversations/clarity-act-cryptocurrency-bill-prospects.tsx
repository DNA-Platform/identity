import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/clarity-act-cryptocurrency-bill-prospects/.book';
import Cover from '../../../../../../.claude/.conversations/clarity-act-cryptocurrency-bill-prospects/.cover';
import Synopsis from '../../../../../../.claude/.conversations/clarity-act-cryptocurrency-bill-prospects/.synopsis';
import Table from '../../../../../../.claude/.conversations/clarity-act-cryptocurrency-bill-prospects/.table';
import September1520261 from '../../../../../../.claude/.conversations/clarity-act-cryptocurrency-bill-prospects/1-september-15-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {September1520261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
