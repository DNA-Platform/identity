import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--typescript-testing-framework-review--80a52850/.book';
import Cover from '../../../../../../.claude/.conversations/claude--typescript-testing-framework-review--80a52850/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--typescript-testing-framework-review--80a52850/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--typescript-testing-framework-review--80a52850/.table';
import October2220251 from '../../../../../../.claude/.conversations/claude--typescript-testing-framework-review--80a52850/1-october-22-2025';

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
