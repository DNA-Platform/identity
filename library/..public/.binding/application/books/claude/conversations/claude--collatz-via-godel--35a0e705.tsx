import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--collatz-via-godel--35a0e705/.book';
import Cover from '../../../../../../.claude/.conversations/claude--collatz-via-godel--35a0e705/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--collatz-via-godel--35a0e705/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--collatz-via-godel--35a0e705/.table';
import June520261 from '../../../../../../.claude/.conversations/claude--collatz-via-godel--35a0e705/1-june-5-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June520261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
