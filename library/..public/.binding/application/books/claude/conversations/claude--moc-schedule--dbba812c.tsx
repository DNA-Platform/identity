import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--moc-schedule--dbba812c/.book';
import Cover from '../../../../../../.claude/.conversations/claude--moc-schedule--dbba812c/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--moc-schedule--dbba812c/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--moc-schedule--dbba812c/.table';
import October1020261 from '../../../../../../.claude/.conversations/claude--moc-schedule--dbba812c/1-october-10-2026';
import October1220262 from '../../../../../../.claude/.conversations/claude--moc-schedule--dbba812c/2-october-12-2026';
import October1320263 from '../../../../../../.claude/.conversations/claude--moc-schedule--dbba812c/3-october-13-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {October1020261()}
        {October1220262()}
        {October1320263()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
