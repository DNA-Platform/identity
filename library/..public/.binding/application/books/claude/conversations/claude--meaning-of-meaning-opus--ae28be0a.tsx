import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--meaning-of-meaning-opus--ae28be0a/.book';
import Cover from '../../../../../../.claude/.conversations/claude--meaning-of-meaning-opus--ae28be0a/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--meaning-of-meaning-opus--ae28be0a/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--meaning-of-meaning-opus--ae28be0a/.table';
import October2620251 from '../../../../../../.claude/.conversations/claude--meaning-of-meaning-opus--ae28be0a/1-october-26-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {October2620251()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
