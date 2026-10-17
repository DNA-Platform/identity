import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--type-systems-and-inheritance-formalism--ab0b8d4d/.book';
import Cover from '../../../../../../.claude/.conversations/claude--type-systems-and-inheritance-formalism--ab0b8d4d/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--type-systems-and-inheritance-formalism--ab0b8d4d/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--type-systems-and-inheritance-formalism--ab0b8d4d/.table';
import February820261 from '../../../../../../.claude/.conversations/claude--type-systems-and-inheritance-formalism--ab0b8d4d/1-february-8-2026';
import February920262 from '../../../../../../.claude/.conversations/claude--type-systems-and-inheritance-formalism--ab0b8d4d/2-february-9-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {February820261()}
        {February920262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
