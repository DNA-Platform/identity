import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--checking-wolt-listing-against-vet-recommendation--0c43db6f/.book';
import Cover from '../../../../../../.claude/.conversations/claude--checking-wolt-listing-against-vet-recommendation--0c43db6f/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--checking-wolt-listing-against-vet-recommendation--0c43db6f/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--checking-wolt-listing-against-vet-recommendation--0c43db6f/.table';
import February1620261 from '../../../../../../.claude/.conversations/claude--checking-wolt-listing-against-vet-recommendation--0c43db6f/1-february-16-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {February1620261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
