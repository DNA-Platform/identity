import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--rescheduling-fedex-delivery-to-tbilisi--9e6c3434/.book';
import Cover from '../../../../../../.claude/.conversations/claude--rescheduling-fedex-delivery-to-tbilisi--9e6c3434/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--rescheduling-fedex-delivery-to-tbilisi--9e6c3434/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--rescheduling-fedex-delivery-to-tbilisi--9e6c3434/.table';
import June720261 from '../../../../../../.claude/.conversations/claude--rescheduling-fedex-delivery-to-tbilisi--9e6c3434/1-june-7-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June720261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
