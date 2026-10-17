import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--telegrams-hypothetical-telephone-product-theory--cda3c1bb/.book';
import Cover from '../../../../../../.claude/.conversations/claude--telegrams-hypothetical-telephone-product-theory--cda3c1bb/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--telegrams-hypothetical-telephone-product-theory--cda3c1bb/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--telegrams-hypothetical-telephone-product-theory--cda3c1bb/.table';
import August1920261 from '../../../../../../.claude/.conversations/claude--telegrams-hypothetical-telephone-product-theory--cda3c1bb/1-august-19-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {August1920261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
