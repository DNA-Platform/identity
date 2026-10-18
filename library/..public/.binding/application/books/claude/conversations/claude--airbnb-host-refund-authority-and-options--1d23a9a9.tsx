import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--airbnb-host-refund-authority-and-options--1d23a9a9/.book';
import Cover from '../../../../../../.claude/.conversations/claude--airbnb-host-refund-authority-and-options--1d23a9a9/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--airbnb-host-refund-authority-and-options--1d23a9a9/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--airbnb-host-refund-authority-and-options--1d23a9a9/.table';
import June1220261 from '../../../../../../.claude/.conversations/claude--airbnb-host-refund-authority-and-options--1d23a9a9/1-june-12-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June1220261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
