import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--moc-speakers--890d0f4a/.book';
import Cover from '../../../../../../.claude/.conversations/claude--moc-speakers--890d0f4a/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--moc-speakers--890d0f4a/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--moc-speakers--890d0f4a/.table';
import October1020261 from '../../../../../../.claude/.conversations/claude--moc-speakers--890d0f4a/1-october-10-2026';
import October1120262 from '../../../../../../.claude/.conversations/claude--moc-speakers--890d0f4a/2-october-11-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {October1020261()}
        {October1120262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
