import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--scions-macro-short-positions-and-options-exposure--d398390c/.book';
import Cover from '../../../../../../.claude/.conversations/claude--scions-macro-short-positions-and-options-exposure--d398390c/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--scions-macro-short-positions-and-options-exposure--d398390c/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--scions-macro-short-positions-and-options-exposure--d398390c/.table';
import January2220261 from '../../../../../../.claude/.conversations/claude--scions-macro-short-positions-and-options-exposure--d398390c/1-january-22-2026';
import January2320262 from '../../../../../../.claude/.conversations/claude--scions-macro-short-positions-and-options-exposure--d398390c/2-january-23-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January2220261()}
        {January2320262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
