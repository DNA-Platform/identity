import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--ton-and-tonx-17-percent-decline-beta-vs-idiosyncratic-driver--a4e6d89e/.book';
import Cover from '../../../../../../.claude/.conversations/claude--ton-and-tonx-17-percent-decline-beta-vs-idiosyncratic-driver--a4e6d89e/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--ton-and-tonx-17-percent-decline-beta-vs-idiosyncratic-driver--a4e6d89e/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--ton-and-tonx-17-percent-decline-beta-vs-idiosyncratic-driver--a4e6d89e/.table';
import June520261 from '../../../../../../.claude/.conversations/claude--ton-and-tonx-17-percent-decline-beta-vs-idiosyncratic-driver--a4e6d89e/1-june-5-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June520261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
