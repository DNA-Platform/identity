import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--telegram-marketplace-for-services-and-crypto-payments--e845b07c/.book';
import Cover from '../../../../../../.claude/.conversations/claude--telegram-marketplace-for-services-and-crypto-payments--e845b07c/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--telegram-marketplace-for-services-and-crypto-payments--e845b07c/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--telegram-marketplace-for-services-and-crypto-payments--e845b07c/.table';
import February220261 from '../../../../../../.claude/.conversations/claude--telegram-marketplace-for-services-and-crypto-payments--e845b07c/1-february-2-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {February220261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
