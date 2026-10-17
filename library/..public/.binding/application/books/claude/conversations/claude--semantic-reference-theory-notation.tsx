import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--semantic-reference-theory-notation/.book';
import Cover from '../../../../../../.claude/.conversations/claude--semantic-reference-theory-notation/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--semantic-reference-theory-notation/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--semantic-reference-theory-notation/.table';
import September120251 from '../../../../../../.claude/.conversations/claude--semantic-reference-theory-notation/1-september-1-2025';
import September220252 from '../../../../../../.claude/.conversations/claude--semantic-reference-theory-notation/2-september-2-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {September120251()}
        {September220252()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
