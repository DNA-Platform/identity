import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--seren-and-first-order-logic--6559b8a0/.book';
import Cover from '../../../../../../.claude/.conversations/claude--seren-and-first-order-logic--6559b8a0/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--seren-and-first-order-logic--6559b8a0/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--seren-and-first-order-logic--6559b8a0/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--seren-and-first-order-logic--6559b8a0/1-conversation';
import FirstOrderLogicCompleteFormalSpecificationV1o1 from '../../../../../../.claude/.conversations/claude--seren-and-first-order-logic--6559b8a0/o1-first-order-logic-complete-formal-specification-v1';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {Conversation1()}
        {FirstOrderLogicCompleteFormalSpecificationV1o1()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
