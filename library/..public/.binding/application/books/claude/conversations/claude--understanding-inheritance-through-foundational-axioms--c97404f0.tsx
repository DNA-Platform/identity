import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--understanding-inheritance-through-foundational-axioms--c97404f0/.book';
import Cover from '../../../../../../.claude/.conversations/claude--understanding-inheritance-through-foundational-axioms--c97404f0/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--understanding-inheritance-through-foundational-axioms--c97404f0/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--understanding-inheritance-through-foundational-axioms--c97404f0/.table';
import December1220251 from '../../../../../../.claude/.conversations/claude--understanding-inheritance-through-foundational-axioms--c97404f0/1-december-12-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {December1220251()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
