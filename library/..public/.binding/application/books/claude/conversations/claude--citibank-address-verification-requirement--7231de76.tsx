import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--citibank-address-verification-requirement--7231de76/.book';
import Cover from '../../../../../../.claude/.conversations/claude--citibank-address-verification-requirement--7231de76/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--citibank-address-verification-requirement--7231de76/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--citibank-address-verification-requirement--7231de76/.table';
import May2720261 from '../../../../../../.claude/.conversations/claude--citibank-address-verification-requirement--7231de76/1-may-27-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {May2720261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
