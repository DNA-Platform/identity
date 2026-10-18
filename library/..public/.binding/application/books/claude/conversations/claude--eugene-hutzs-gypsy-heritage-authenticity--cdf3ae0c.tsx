import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--eugene-hutzs-gypsy-heritage-authenticity--cdf3ae0c/.book';
import Cover from '../../../../../../.claude/.conversations/claude--eugene-hutzs-gypsy-heritage-authenticity--cdf3ae0c/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--eugene-hutzs-gypsy-heritage-authenticity--cdf3ae0c/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--eugene-hutzs-gypsy-heritage-authenticity--cdf3ae0c/.table';
import June720261 from '../../../../../../.claude/.conversations/claude--eugene-hutzs-gypsy-heritage-authenticity--cdf3ae0c/1-june-7-2026';
import June820262 from '../../../../../../.claude/.conversations/claude--eugene-hutzs-gypsy-heritage-authenticity--cdf3ae0c/2-june-8-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June720261()}
        {June820262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
