import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--criminal-allegations-in-russian-civil-custody-cases--97db290c/.book';
import Cover from '../../../../../../.claude/.conversations/claude--criminal-allegations-in-russian-civil-custody-cases--97db290c/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--criminal-allegations-in-russian-civil-custody-cases--97db290c/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--criminal-allegations-in-russian-civil-custody-cases--97db290c/.table';
import January1820261 from '../../../../../../.claude/.conversations/claude--criminal-allegations-in-russian-civil-custody-cases--97db290c/1-january-18-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January1820261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
