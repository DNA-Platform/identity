import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--read-with-kamil--36ca3d83/.book';
import Cover from '../../../../../../.claude/.conversations/claude--read-with-kamil--36ca3d83/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--read-with-kamil--36ca3d83/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--read-with-kamil--36ca3d83/.table';
import February1020261 from '../../../../../../.claude/.conversations/claude--read-with-kamil--36ca3d83/1-february-10-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {February1020261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
