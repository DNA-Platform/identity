import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--ana-talks-about-very-personal--75a79e9d/.book';
import Cover from '../../../../../../.claude/.conversations/claude--ana-talks-about-very-personal--75a79e9d/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--ana-talks-about-very-personal--75a79e9d/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--ana-talks-about-very-personal--75a79e9d/.table';
import July520261 from '../../../../../../.claude/.conversations/claude--ana-talks-about-very-personal--75a79e9d/1-july-5-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {July520261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
