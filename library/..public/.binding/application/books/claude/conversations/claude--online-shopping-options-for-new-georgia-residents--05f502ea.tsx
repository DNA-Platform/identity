import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--online-shopping-options-for-new-georgia-residents--05f502ea/.book';
import Cover from '../../../../../../.claude/.conversations/claude--online-shopping-options-for-new-georgia-residents--05f502ea/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--online-shopping-options-for-new-georgia-residents--05f502ea/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--online-shopping-options-for-new-georgia-residents--05f502ea/.table';
import March520261 from '../../../../../../.claude/.conversations/claude--online-shopping-options-for-new-georgia-residents--05f502ea/1-march-5-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {March520261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
