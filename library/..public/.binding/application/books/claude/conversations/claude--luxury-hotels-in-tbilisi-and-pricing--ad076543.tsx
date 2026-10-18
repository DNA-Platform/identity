import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--luxury-hotels-in-tbilisi-and-pricing--ad076543/.book';
import Cover from '../../../../../../.claude/.conversations/claude--luxury-hotels-in-tbilisi-and-pricing--ad076543/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--luxury-hotels-in-tbilisi-and-pricing--ad076543/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--luxury-hotels-in-tbilisi-and-pricing--ad076543/.table';
import August1320261 from '../../../../../../.claude/.conversations/claude--luxury-hotels-in-tbilisi-and-pricing--ad076543/1-august-13-2026';

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
