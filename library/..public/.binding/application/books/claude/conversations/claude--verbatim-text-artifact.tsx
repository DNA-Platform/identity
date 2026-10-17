import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--verbatim-text-artifact/.book';
import Cover from '../../../../../../.claude/.conversations/claude--verbatim-text-artifact/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--verbatim-text-artifact/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--verbatim-text-artifact/.table';
import October2720251 from '../../../../../../.claude/.conversations/claude--verbatim-text-artifact/1-october-27-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {October2720251()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
