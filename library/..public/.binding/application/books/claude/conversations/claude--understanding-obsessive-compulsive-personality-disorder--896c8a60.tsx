import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--understanding-obsessive-compulsive-personality-disorder--896c8a60/.book';
import Cover from '../../../../../../.claude/.conversations/claude--understanding-obsessive-compulsive-personality-disorder--896c8a60/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--understanding-obsessive-compulsive-personality-disorder--896c8a60/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--understanding-obsessive-compulsive-personality-disorder--896c8a60/.table';
import November420241 from '../../../../../../.claude/.conversations/claude--understanding-obsessive-compulsive-personality-disorder--896c8a60/1-november-4-2024';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {November420241()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
