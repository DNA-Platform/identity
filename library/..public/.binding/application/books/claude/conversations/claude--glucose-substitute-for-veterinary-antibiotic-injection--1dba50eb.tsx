import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--glucose-substitute-for-veterinary-antibiotic-injection--1dba50eb/.book';
import Cover from '../../../../../../.claude/.conversations/claude--glucose-substitute-for-veterinary-antibiotic-injection--1dba50eb/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--glucose-substitute-for-veterinary-antibiotic-injection--1dba50eb/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--glucose-substitute-for-veterinary-antibiotic-injection--1dba50eb/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--glucose-substitute-for-veterinary-antibiotic-injection--1dba50eb/1-conversation';

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
