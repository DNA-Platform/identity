import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--buckwheat-calorie-content-and-nutritional-value--5477319a/.book';
import Cover from '../../../../../../.claude/.conversations/claude--buckwheat-calorie-content-and-nutritional-value--5477319a/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--buckwheat-calorie-content-and-nutritional-value--5477319a/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--buckwheat-calorie-content-and-nutritional-value--5477319a/.table';
import February320261 from '../../../../../../.claude/.conversations/claude--buckwheat-calorie-content-and-nutritional-value--5477319a/1-february-3-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {February320261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
