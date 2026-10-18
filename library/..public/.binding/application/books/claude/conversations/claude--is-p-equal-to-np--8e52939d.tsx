import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--is-p-equal-to-np--8e52939d/.book';
import Cover from '../../../../../../.claude/.conversations/claude--is-p-equal-to-np--8e52939d/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--is-p-equal-to-np--8e52939d/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--is-p-equal-to-np--8e52939d/.table';
import June2120261 from '../../../../../../.claude/.conversations/claude--is-p-equal-to-np--8e52939d/1-june-21-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June2120261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
