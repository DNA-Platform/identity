import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--eirian-and-inexplicable-phenomena--5627e727/.book';
import Cover from '../../../../../../.claude/.conversations/claude--eirian-and-inexplicable-phenomena--5627e727/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--eirian-and-inexplicable-phenomena--5627e727/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--eirian-and-inexplicable-phenomena--5627e727/.table';
import August520251 from '../../../../../../.claude/.conversations/claude--eirian-and-inexplicable-phenomena--5627e727/1-august-5-2025';
import August620252 from '../../../../../../.claude/.conversations/claude--eirian-and-inexplicable-phenomena--5627e727/2-august-6-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {August520251()}
        {August620252()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
