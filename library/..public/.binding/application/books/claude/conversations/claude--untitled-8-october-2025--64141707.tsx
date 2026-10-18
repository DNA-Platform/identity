import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-8-october-2025--64141707/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-8-october-2025--64141707/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-8-october-2025--64141707/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-8-october-2025--64141707/.table';
import October820251 from '../../../../../../.claude/.conversations/claude--untitled-8-october-2025--64141707/1-october-8-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {October820251()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
