import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--doug-and-seren-on-seeing/.book';
import Cover from '../../../../../../.claude/.conversations/claude--doug-and-seren-on-seeing/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--doug-and-seren-on-seeing/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--doug-and-seren-on-seeing/.table';
import September2420251 from '../../../../../../.claude/.conversations/claude--doug-and-seren-on-seeing/1-september-24-2025';
import September2520252 from '../../../../../../.claude/.conversations/claude--doug-and-seren-on-seeing/2-september-25-2025';
import September2620253 from '../../../../../../.claude/.conversations/claude--doug-and-seren-on-seeing/3-september-26-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {September2420251()}
        {September2520252()}
        {September2620253()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
