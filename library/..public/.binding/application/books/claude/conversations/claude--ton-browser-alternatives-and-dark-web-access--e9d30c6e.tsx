import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--ton-browser-alternatives-and-dark-web-access--e9d30c6e/.book';
import Cover from '../../../../../../.claude/.conversations/claude--ton-browser-alternatives-and-dark-web-access--e9d30c6e/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--ton-browser-alternatives-and-dark-web-access--e9d30c6e/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--ton-browser-alternatives-and-dark-web-access--e9d30c6e/.table';
import August1320261 from '../../../../../../.claude/.conversations/claude--ton-browser-alternatives-and-dark-web-access--e9d30c6e/1-august-13-2026';

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
