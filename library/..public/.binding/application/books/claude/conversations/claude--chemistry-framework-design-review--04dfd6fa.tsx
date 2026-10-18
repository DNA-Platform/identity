import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--chemistry-framework-design-review--04dfd6fa/.book';
import Cover from '../../../../../../.claude/.conversations/claude--chemistry-framework-design-review--04dfd6fa/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--chemistry-framework-design-review--04dfd6fa/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--chemistry-framework-design-review--04dfd6fa/.table';
import September1720251 from '../../../../../../.claude/.conversations/claude--chemistry-framework-design-review--04dfd6fa/1-september-17-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {September1720251()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
