import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--chemical-bond-code-debugging--85874296/.book';
import Cover from '../../../../../../.claude/.conversations/claude--chemical-bond-code-debugging--85874296/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--chemical-bond-code-debugging--85874296/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--chemical-bond-code-debugging--85874296/.table';
import October1020251 from '../../../../../../.claude/.conversations/claude--chemical-bond-code-debugging--85874296/1-october-10-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {October1020251()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
