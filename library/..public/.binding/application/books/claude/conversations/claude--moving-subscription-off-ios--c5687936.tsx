import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--moving-subscription-off-ios--c5687936/.book';
import Cover from '../../../../../../.claude/.conversations/claude--moving-subscription-off-ios--c5687936/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--moving-subscription-off-ios--c5687936/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--moving-subscription-off-ios--c5687936/.table';
import May1820261 from '../../../../../../.claude/.conversations/claude--moving-subscription-off-ios--c5687936/1-may-18-2026';
import May1920262 from '../../../../../../.claude/.conversations/claude--moving-subscription-off-ios--c5687936/2-may-19-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {May1820261()}
        {May1920262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
