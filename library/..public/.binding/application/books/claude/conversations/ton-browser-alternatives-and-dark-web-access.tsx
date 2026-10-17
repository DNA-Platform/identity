import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/ton-browser-alternatives-and-dark-web-access/.book';
import Cover from '../../../../../../.claude/.conversations/ton-browser-alternatives-and-dark-web-access/.cover';
import Synopsis from '../../../../../../.claude/.conversations/ton-browser-alternatives-and-dark-web-access/.synopsis';
import Table from '../../../../../../.claude/.conversations/ton-browser-alternatives-and-dark-web-access/.table';
import August1320261 from '../../../../../../.claude/.conversations/ton-browser-alternatives-and-dark-web-access/1-august-13-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {August1320261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
