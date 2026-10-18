import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--remote-getaway-near-tbilisi--8a11194f/.book';
import Cover from '../../../../../../.claude/.conversations/claude--remote-getaway-near-tbilisi--8a11194f/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--remote-getaway-near-tbilisi--8a11194f/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--remote-getaway-near-tbilisi--8a11194f/.table';
import May2620261 from '../../../../../../.claude/.conversations/claude--remote-getaway-near-tbilisi--8a11194f/1-may-26-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {May2620261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
