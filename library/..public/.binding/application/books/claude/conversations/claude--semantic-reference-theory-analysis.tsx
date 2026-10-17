import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--semantic-reference-theory-analysis/.book';
import Cover from '../../../../../../.claude/.conversations/claude--semantic-reference-theory-analysis/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--semantic-reference-theory-analysis/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--semantic-reference-theory-analysis/.table';
import September720251 from '../../../../../../.claude/.conversations/claude--semantic-reference-theory-analysis/1-september-7-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {September720251()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
