import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--axioms-of-first-order-logic--5b073957/.book';
import Cover from '../../../../../../.claude/.conversations/claude--axioms-of-first-order-logic--5b073957/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--axioms-of-first-order-logic--5b073957/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--axioms-of-first-order-logic--5b073957/.table';
import November1520241 from '../../../../../../.claude/.conversations/claude--axioms-of-first-order-logic--5b073957/1-november-15-2024';
import November1620242 from '../../../../../../.claude/.conversations/claude--axioms-of-first-order-logic--5b073957/2-november-16-2024';
import November1720243 from '../../../../../../.claude/.conversations/claude--axioms-of-first-order-logic--5b073957/3-november-17-2024';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {November1520241()}
        {November1620242()}
        {November1720243()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
