import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--adding-images-and-market-research-to-product-descriptions--0af11d32/.book';
import Cover from '../../../../../../.claude/.conversations/claude--adding-images-and-market-research-to-product-descriptions--0af11d32/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--adding-images-and-market-research-to-product-descriptions--0af11d32/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--adding-images-and-market-research-to-product-descriptions--0af11d32/.table';
import March2520261 from '../../../../../../.claude/.conversations/claude--adding-images-and-market-research-to-product-descriptions--0af11d32/1-march-25-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {March2520261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
