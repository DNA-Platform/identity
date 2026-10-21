import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--type-systems-and-inheritance-formalism--ab0b8d4d/.book';
import Cover from '../../../../../../.claude/.conversations/claude--type-systems-and-inheritance-formalism--ab0b8d4d/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--type-systems-and-inheritance-formalism--ab0b8d4d/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--type-systems-and-inheritance-formalism--ab0b8d4d/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--type-systems-and-inheritance-formalism--ab0b8d4d/1-conversation';

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
