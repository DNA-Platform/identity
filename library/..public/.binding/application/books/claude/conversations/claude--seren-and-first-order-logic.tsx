import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--seren-and-first-order-logic/.book';
import Cover from '../../../../../../.claude/.conversations/claude--seren-and-first-order-logic/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--seren-and-first-order-logic/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--seren-and-first-order-logic/.table';
import September1320251 from '../../../../../../.claude/.conversations/claude--seren-and-first-order-logic/1-september-13-2025';
import September1520252 from '../../../../../../.claude/.conversations/claude--seren-and-first-order-logic/2-september-15-2025';
import FirstOrderLogicCompleteFormalSpecificationV1o1 from '../../../../../../.claude/.conversations/claude--seren-and-first-order-logic/o1-first-order-logic-complete-formal-specification-v1';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {September1320251()}
        {September1520252()}
        {FirstOrderLogicCompleteFormalSpecificationV1o1()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
