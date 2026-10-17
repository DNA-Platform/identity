import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--origins-of-darkweb-operational-security/.book';
import Cover from '../../../../../../.claude/.conversations/claude--origins-of-darkweb-operational-security/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--origins-of-darkweb-operational-security/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--origins-of-darkweb-operational-security/.table';
import January3120261 from '../../../../../../.claude/.conversations/claude--origins-of-darkweb-operational-security/1-january-31-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January3120261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
