import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--adding-a-google-account-to-iphone--33a9f673/.book';
import Cover from '../../../../../../.claude/.conversations/claude--adding-a-google-account-to-iphone--33a9f673/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--adding-a-google-account-to-iphone--33a9f673/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--adding-a-google-account-to-iphone--33a9f673/.table';
import March1220261 from '../../../../../../.claude/.conversations/claude--adding-a-google-account-to-iphone--33a9f673/1-march-12-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {March1220261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
