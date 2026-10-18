import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--eirian-and-inexplicable-phenomena-part-ii--a1ab01ae/.book';
import Cover from '../../../../../../.claude/.conversations/claude--eirian-and-inexplicable-phenomena-part-ii--a1ab01ae/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--eirian-and-inexplicable-phenomena-part-ii--a1ab01ae/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--eirian-and-inexplicable-phenomena-part-ii--a1ab01ae/.table';
import August620251 from '../../../../../../.claude/.conversations/claude--eirian-and-inexplicable-phenomena-part-ii--a1ab01ae/1-august-6-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {August620251()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
