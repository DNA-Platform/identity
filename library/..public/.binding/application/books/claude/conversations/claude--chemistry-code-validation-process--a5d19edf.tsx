import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--chemistry-code-validation-process--a5d19edf/.book';
import Cover from '../../../../../../.claude/.conversations/claude--chemistry-code-validation-process--a5d19edf/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--chemistry-code-validation-process--a5d19edf/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--chemistry-code-validation-process--a5d19edf/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--chemistry-code-validation-process--a5d19edf/1-conversation';

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
