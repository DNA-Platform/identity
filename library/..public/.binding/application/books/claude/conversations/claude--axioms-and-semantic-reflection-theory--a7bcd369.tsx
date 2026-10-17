import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--axioms-and-semantic-reflection-theory--a7bcd369/.book';
import Cover from '../../../../../../.claude/.conversations/claude--axioms-and-semantic-reflection-theory--a7bcd369/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--axioms-and-semantic-reflection-theory--a7bcd369/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--axioms-and-semantic-reflection-theory--a7bcd369/.table';
import October1420251 from '../../../../../../.claude/.conversations/claude--axioms-and-semantic-reflection-theory--a7bcd369/1-october-14-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {October1420251()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
