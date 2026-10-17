import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--semantic-reference-theory-foundations/.book';
import Cover from '../../../../../../.claude/.conversations/claude--semantic-reference-theory-foundations/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--semantic-reference-theory-foundations/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--semantic-reference-theory-foundations/.table';
import September2620251 from '../../../../../../.claude/.conversations/claude--semantic-reference-theory-foundations/1-september-26-2025';
import September2720252 from '../../../../../../.claude/.conversations/claude--semantic-reference-theory-foundations/2-september-27-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {September2620251()}
        {September2720252()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
