import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--how-claude-works--3e26816f/.book';
import Cover from '../../../../../../.claude/.conversations/claude--how-claude-works--3e26816f/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--how-claude-works--3e26816f/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--how-claude-works--3e26816f/.table';
import August620261 from '../../../../../../.claude/.conversations/claude--how-claude-works--3e26816f/1-august-6-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {August620261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
