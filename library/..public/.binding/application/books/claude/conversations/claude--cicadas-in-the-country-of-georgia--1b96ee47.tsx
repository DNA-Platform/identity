import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--cicadas-in-the-country-of-georgia--1b96ee47/.book';
import Cover from '../../../../../../.claude/.conversations/claude--cicadas-in-the-country-of-georgia--1b96ee47/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--cicadas-in-the-country-of-georgia--1b96ee47/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--cicadas-in-the-country-of-georgia--1b96ee47/.table';
import July420261 from '../../../../../../.claude/.conversations/claude--cicadas-in-the-country-of-georgia--1b96ee47/1-july-4-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {July420261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
