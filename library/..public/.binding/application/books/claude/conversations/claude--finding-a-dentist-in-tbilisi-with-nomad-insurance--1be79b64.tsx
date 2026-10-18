import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--finding-a-dentist-in-tbilisi-with-nomad-insurance--1be79b64/.book';
import Cover from '../../../../../../.claude/.conversations/claude--finding-a-dentist-in-tbilisi-with-nomad-insurance--1be79b64/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--finding-a-dentist-in-tbilisi-with-nomad-insurance--1be79b64/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--finding-a-dentist-in-tbilisi-with-nomad-insurance--1be79b64/.table';
import January2220261 from '../../../../../../.claude/.conversations/claude--finding-a-dentist-in-tbilisi-with-nomad-insurance--1be79b64/1-january-22-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January2220261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
