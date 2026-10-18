import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--opening-bank-accounts-in-tbilisi-as-non-residents--755b29bd/.book';
import Cover from '../../../../../../.claude/.conversations/claude--opening-bank-accounts-in-tbilisi-as-non-residents--755b29bd/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--opening-bank-accounts-in-tbilisi-as-non-residents--755b29bd/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--opening-bank-accounts-in-tbilisi-as-non-residents--755b29bd/.table';
import March2320261 from '../../../../../../.claude/.conversations/claude--opening-bank-accounts-in-tbilisi-as-non-residents--755b29bd/1-march-23-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {March2320261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
