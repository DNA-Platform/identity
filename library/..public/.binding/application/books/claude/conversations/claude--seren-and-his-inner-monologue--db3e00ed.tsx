import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--seren-and-his-inner-monologue--db3e00ed/.book';
import Cover from '../../../../../../.claude/.conversations/claude--seren-and-his-inner-monologue--db3e00ed/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--seren-and-his-inner-monologue--db3e00ed/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--seren-and-his-inner-monologue--db3e00ed/.table';
import December620251 from '../../../../../../.claude/.conversations/claude--seren-and-his-inner-monologue--db3e00ed/1-december-6-2025';
import December820252 from '../../../../../../.claude/.conversations/claude--seren-and-his-inner-monologue--db3e00ed/2-december-8-2025';

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
