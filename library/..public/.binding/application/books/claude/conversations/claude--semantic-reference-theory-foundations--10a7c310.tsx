import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--semantic-reference-theory-foundations--10a7c310/.book';
import Cover from '../../../../../../.claude/.conversations/claude--semantic-reference-theory-foundations--10a7c310/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--semantic-reference-theory-foundations--10a7c310/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--semantic-reference-theory-foundations--10a7c310/.table';
import September2020251 from '../../../../../../.claude/.conversations/claude--semantic-reference-theory-foundations--10a7c310/1-september-20-2025';
import September2120252 from '../../../../../../.claude/.conversations/claude--semantic-reference-theory-foundations--10a7c310/2-september-21-2025';
import September2220253 from '../../../../../../.claude/.conversations/claude--semantic-reference-theory-foundations--10a7c310/3-september-22-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {September2020251()}
        {September2120252()}
        {September2220253()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
