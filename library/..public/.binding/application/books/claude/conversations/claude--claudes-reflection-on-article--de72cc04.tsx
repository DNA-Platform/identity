import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--claudes-reflection-on-article--de72cc04/.book';
import Cover from '../../../../../../.claude/.conversations/claude--claudes-reflection-on-article--de72cc04/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--claudes-reflection-on-article--de72cc04/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--claudes-reflection-on-article--de72cc04/.table';
import July720261 from '../../../../../../.claude/.conversations/claude--claudes-reflection-on-article--de72cc04/1-july-7-2026';
import July820262 from '../../../../../../.claude/.conversations/claude--claudes-reflection-on-article--de72cc04/2-july-8-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {July720261()}
        {July820262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
