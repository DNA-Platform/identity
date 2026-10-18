import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--understanding-a-tax-adjustment-notice--1acaaf0e/.book';
import Cover from '../../../../../../.claude/.conversations/claude--understanding-a-tax-adjustment-notice--1acaaf0e/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--understanding-a-tax-adjustment-notice--1acaaf0e/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--understanding-a-tax-adjustment-notice--1acaaf0e/.table';
import June1820261 from '../../../../../../.claude/.conversations/claude--understanding-a-tax-adjustment-notice--1acaaf0e/1-june-18-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June1820261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
