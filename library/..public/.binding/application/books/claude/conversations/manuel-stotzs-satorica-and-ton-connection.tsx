import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/manuel-stotzs-satorica-and-ton-connection/.book';
import Cover from '../../../../../../.claude/.conversations/manuel-stotzs-satorica-and-ton-connection/.cover';
import Synopsis from '../../../../../../.claude/.conversations/manuel-stotzs-satorica-and-ton-connection/.synopsis';
import Table from '../../../../../../.claude/.conversations/manuel-stotzs-satorica-and-ton-connection/.table';
import February1820261 from '../../../../../../.claude/.conversations/manuel-stotzs-satorica-and-ton-connection/1-february-18-2026';

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
