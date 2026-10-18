import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--watermarking-images-and-nfts--8d6e372c/.book';
import Cover from '../../../../../../.claude/.conversations/claude--watermarking-images-and-nfts--8d6e372c/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--watermarking-images-and-nfts--8d6e372c/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--watermarking-images-and-nfts--8d6e372c/.table';
import October2920241 from '../../../../../../.claude/.conversations/claude--watermarking-images-and-nfts--8d6e372c/1-october-29-2024';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {October2920241()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
