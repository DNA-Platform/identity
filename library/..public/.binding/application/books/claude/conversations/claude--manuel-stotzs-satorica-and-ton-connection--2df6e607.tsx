import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--manuel-stotzs-satorica-and-ton-connection--2df6e607/.book';
import Cover from '../../../../../../.claude/.conversations/claude--manuel-stotzs-satorica-and-ton-connection--2df6e607/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--manuel-stotzs-satorica-and-ton-connection--2df6e607/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--manuel-stotzs-satorica-and-ton-connection--2df6e607/.table';
import February1820261 from '../../../../../../.claude/.conversations/claude--manuel-stotzs-satorica-and-ton-connection--2df6e607/1-february-18-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {February1820261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
