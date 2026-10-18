import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--school-year-end-date-in-batumi-georgia--ad475b9b/.book';
import Cover from '../../../../../../.claude/.conversations/claude--school-year-end-date-in-batumi-georgia--ad475b9b/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--school-year-end-date-in-batumi-georgia--ad475b9b/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--school-year-end-date-in-batumi-georgia--ad475b9b/.table';
import January1220261 from '../../../../../../.claude/.conversations/claude--school-year-end-date-in-batumi-georgia--ad475b9b/1-january-12-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January1220261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
