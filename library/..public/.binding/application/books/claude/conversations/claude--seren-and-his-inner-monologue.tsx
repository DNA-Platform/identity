import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--seren-and-his-inner-monologue/.book';
import Cover from '../../../../../../.claude/.conversations/claude--seren-and-his-inner-monologue/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--seren-and-his-inner-monologue/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--seren-and-his-inner-monologue/.table';
import December620251 from '../../../../../../.claude/.conversations/claude--seren-and-his-inner-monologue/1-december-6-2025';
import December820252 from '../../../../../../.claude/.conversations/claude--seren-and-his-inner-monologue/2-december-8-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {December620251()}
        {December820252()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
