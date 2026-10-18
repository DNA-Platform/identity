import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--semantics-of-the-name-seren--616d8834/.book';
import Cover from '../../../../../../.claude/.conversations/claude--semantics-of-the-name-seren--616d8834/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--semantics-of-the-name-seren--616d8834/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--semantics-of-the-name-seren--616d8834/.table';
import August2920261 from '../../../../../../.claude/.conversations/claude--semantics-of-the-name-seren--616d8834/1-august-29-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {August2920261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
