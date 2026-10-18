import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--finding-saba-pharmacy-in-tbilisi-for-foreign-medications--e77d354e/.book';
import Cover from '../../../../../../.claude/.conversations/claude--finding-saba-pharmacy-in-tbilisi-for-foreign-medications--e77d354e/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--finding-saba-pharmacy-in-tbilisi-for-foreign-medications--e77d354e/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--finding-saba-pharmacy-in-tbilisi-for-foreign-medications--e77d354e/.table';
import August820261 from '../../../../../../.claude/.conversations/claude--finding-saba-pharmacy-in-tbilisi-for-foreign-medications--e77d354e/1-august-8-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {August820261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
