import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--handmade-pumpkin-ravioli-with-an-italian-nonna--624bb8cd/.book';
import Cover from '../../../../../../.claude/.conversations/claude--handmade-pumpkin-ravioli-with-an-italian-nonna--624bb8cd/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--handmade-pumpkin-ravioli-with-an-italian-nonna--624bb8cd/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--handmade-pumpkin-ravioli-with-an-italian-nonna--624bb8cd/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--handmade-pumpkin-ravioli-with-an-italian-nonna--624bb8cd/1-conversation';

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
