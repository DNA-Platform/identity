import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--legal-response-strategy-for-major-settlement--29d6ac16/.book';
import Cover from '../../../../../../.claude/.conversations/claude--legal-response-strategy-for-major-settlement--29d6ac16/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--legal-response-strategy-for-major-settlement--29d6ac16/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--legal-response-strategy-for-major-settlement--29d6ac16/.table';
import February1520261 from '../../../../../../.claude/.conversations/claude--legal-response-strategy-for-major-settlement--29d6ac16/1-february-15-2026';
import February1620262 from '../../../../../../.claude/.conversations/claude--legal-response-strategy-for-major-settlement--29d6ac16/2-february-16-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {February1520261()}
        {February1620262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
