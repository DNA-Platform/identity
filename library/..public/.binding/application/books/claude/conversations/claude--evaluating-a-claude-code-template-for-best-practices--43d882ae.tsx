import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--evaluating-a-claude-code-template-for-best-practices--43d882ae/.book';
import Cover from '../../../../../../.claude/.conversations/claude--evaluating-a-claude-code-template-for-best-practices--43d882ae/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--evaluating-a-claude-code-template-for-best-practices--43d882ae/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--evaluating-a-claude-code-template-for-best-practices--43d882ae/.table';
import February2620261 from '../../../../../../.claude/.conversations/claude--evaluating-a-claude-code-template-for-best-practices--43d882ae/1-february-26-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {February2620261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
