import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--typescript-framework-code-review--8361bdf1/.book';
import Cover from '../../../../../../.claude/.conversations/claude--typescript-framework-code-review--8361bdf1/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--typescript-framework-code-review--8361bdf1/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--typescript-framework-code-review--8361bdf1/.table';
import October2220251 from '../../../../../../.claude/.conversations/claude--typescript-framework-code-review--8361bdf1/1-october-22-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {October2220251()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
