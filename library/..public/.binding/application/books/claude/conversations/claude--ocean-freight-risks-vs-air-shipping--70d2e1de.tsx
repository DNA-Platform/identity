import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--ocean-freight-risks-vs-air-shipping--70d2e1de/.book';
import Cover from '../../../../../../.claude/.conversations/claude--ocean-freight-risks-vs-air-shipping--70d2e1de/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--ocean-freight-risks-vs-air-shipping--70d2e1de/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--ocean-freight-risks-vs-air-shipping--70d2e1de/.table';
import May420261 from '../../../../../../.claude/.conversations/claude--ocean-freight-risks-vs-air-shipping--70d2e1de/1-may-4-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {May420261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
