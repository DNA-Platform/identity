import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--understanding-the-dunning-kruger-effect--4f712a68/.book';
import Cover from '../../../../../../.claude/.conversations/claude--understanding-the-dunning-kruger-effect--4f712a68/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--understanding-the-dunning-kruger-effect--4f712a68/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--understanding-the-dunning-kruger-effect--4f712a68/.table';
import November620241 from '../../../../../../.claude/.conversations/claude--understanding-the-dunning-kruger-effect--4f712a68/1-november-6-2024';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {November620241()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
