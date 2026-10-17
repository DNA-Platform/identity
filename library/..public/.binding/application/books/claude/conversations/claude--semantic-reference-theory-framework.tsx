import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--semantic-reference-theory-framework/.book';
import Cover from '../../../../../../.claude/.conversations/claude--semantic-reference-theory-framework/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--semantic-reference-theory-framework/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--semantic-reference-theory-framework/.table';
import August2820251 from '../../../../../../.claude/.conversations/claude--semantic-reference-theory-framework/1-august-28-2025';
import August2920252 from '../../../../../../.claude/.conversations/claude--semantic-reference-theory-framework/2-august-29-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {August2820251()}
        {August2920252()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
