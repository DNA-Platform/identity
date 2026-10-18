import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--collecting-prototype-chain-properties-in-typescript--148003ca/.book';
import Cover from '../../../../../../.claude/.conversations/claude--collecting-prototype-chain-properties-in-typescript--148003ca/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--collecting-prototype-chain-properties-in-typescript--148003ca/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--collecting-prototype-chain-properties-in-typescript--148003ca/.table';
import October3020251 from '../../../../../../.claude/.conversations/claude--collecting-prototype-chain-properties-in-typescript--148003ca/1-october-30-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {October3020251()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
