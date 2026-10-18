import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--local-vs-web-claude-in-vscode--ed6dceca/.book';
import Cover from '../../../../../../.claude/.conversations/claude--local-vs-web-claude-in-vscode--ed6dceca/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--local-vs-web-claude-in-vscode--ed6dceca/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--local-vs-web-claude-in-vscode--ed6dceca/.table';
import June2220261 from '../../../../../../.claude/.conversations/claude--local-vs-web-claude-in-vscode--ed6dceca/1-june-22-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June2220261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
