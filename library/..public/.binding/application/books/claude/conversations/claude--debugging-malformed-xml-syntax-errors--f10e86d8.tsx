import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--debugging-malformed-xml-syntax-errors--f10e86d8/.book';
import Cover from '../../../../../../.claude/.conversations/claude--debugging-malformed-xml-syntax-errors--f10e86d8/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--debugging-malformed-xml-syntax-errors--f10e86d8/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--debugging-malformed-xml-syntax-errors--f10e86d8/.table';
import November220251 from '../../../../../../.claude/.conversations/claude--debugging-malformed-xml-syntax-errors--f10e86d8/1-november-2-2025';
import November320252 from '../../../../../../.claude/.conversations/claude--debugging-malformed-xml-syntax-errors--f10e86d8/2-november-3-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {November220251()}
        {November320252()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
