import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--history-of-propositional-logic--47a37760/.book';
import Cover from '../../../../../../.claude/.conversations/claude--history-of-propositional-logic--47a37760/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--history-of-propositional-logic--47a37760/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--history-of-propositional-logic--47a37760/.table';
import October420251 from '../../../../../../.claude/.conversations/claude--history-of-propositional-logic--47a37760/1-october-4-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {October420251()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
