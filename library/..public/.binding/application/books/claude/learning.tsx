import { $ } from '@dna-platform/chemistry';
import { opened } from '../../opened';
import $Book from '../../../../../.claude/.learning/.book';
import Cover from '../../../../../.claude/.learning/.cover';
import Synopsis from '../../../../../.claude/.learning/.synopsis';
import Table from '../../../../../.claude/.learning/.table';
import TheProject1 from '../../../../../.claude/.learning/1-the-project';
import ClaudeHistoryOfPropositionalLogic47a377602 from '../../../../../.claude/.learning/2-claude-history-of-propositional-logic-47a37760';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {TheProject1()}
        {ClaudeHistoryOfPropositionalLogic47a377602()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
