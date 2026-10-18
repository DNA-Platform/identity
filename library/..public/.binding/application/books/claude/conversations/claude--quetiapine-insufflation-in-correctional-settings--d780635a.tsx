import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--quetiapine-insufflation-in-correctional-settings--d780635a/.book';
import Cover from '../../../../../../.claude/.conversations/claude--quetiapine-insufflation-in-correctional-settings--d780635a/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--quetiapine-insufflation-in-correctional-settings--d780635a/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--quetiapine-insufflation-in-correctional-settings--d780635a/.table';
import May1820261 from '../../../../../../.claude/.conversations/claude--quetiapine-insufflation-in-correctional-settings--d780635a/1-may-18-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {May1820261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
