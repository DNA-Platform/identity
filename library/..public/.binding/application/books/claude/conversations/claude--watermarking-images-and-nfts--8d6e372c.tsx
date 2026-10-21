import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--watermarking-images-and-nfts--8d6e372c/.book';
import Cover from '../../../../../../.claude/.conversations/claude--watermarking-images-and-nfts--8d6e372c/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--watermarking-images-and-nfts--8d6e372c/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--watermarking-images-and-nfts--8d6e372c/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--watermarking-images-and-nfts--8d6e372c/1-conversation';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {Conversation1()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
