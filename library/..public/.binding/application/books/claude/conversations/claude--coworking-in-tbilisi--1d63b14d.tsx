import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--coworking-in-tbilisi--1d63b14d/.book';
import Cover from '../../../../../../.claude/.conversations/claude--coworking-in-tbilisi--1d63b14d/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--coworking-in-tbilisi--1d63b14d/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--coworking-in-tbilisi--1d63b14d/.table';
import May920261 from '../../../../../../.claude/.conversations/claude--coworking-in-tbilisi--1d63b14d/1-may-9-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {May920261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
