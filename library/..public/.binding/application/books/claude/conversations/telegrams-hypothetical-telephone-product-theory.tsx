import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/telegrams-hypothetical-telephone-product-theory/.book';
import Cover from '../../../../../../.claude/.conversations/telegrams-hypothetical-telephone-product-theory/.cover';
import Synopsis from '../../../../../../.claude/.conversations/telegrams-hypothetical-telephone-product-theory/.synopsis';
import Table from '../../../../../../.claude/.conversations/telegrams-hypothetical-telephone-product-theory/.table';
import August1920261 from '../../../../../../.claude/.conversations/telegrams-hypothetical-telephone-product-theory/1-august-19-2026';

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
