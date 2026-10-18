import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--chemistry-framework-code-review--764d2d5f/.book';
import Cover from '../../../../../../.claude/.conversations/claude--chemistry-framework-code-review--764d2d5f/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--chemistry-framework-code-review--764d2d5f/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--chemistry-framework-code-review--764d2d5f/.table';
import October2620251 from '../../../../../../.claude/.conversations/claude--chemistry-framework-code-review--764d2d5f/1-october-26-2025';
import October2720252 from '../../../../../../.claude/.conversations/claude--chemistry-framework-code-review--764d2d5f/2-october-27-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {October2620251()}
        {October2720252()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
