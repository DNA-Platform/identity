import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--claude-code-api-rate-limit-issues-on-pro-plan--b75b1cc6/.book';
import Cover from '../../../../../../.claude/.conversations/claude--claude-code-api-rate-limit-issues-on-pro-plan--b75b1cc6/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--claude-code-api-rate-limit-issues-on-pro-plan--b75b1cc6/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--claude-code-api-rate-limit-issues-on-pro-plan--b75b1cc6/.table';
import March820261 from '../../../../../../.claude/.conversations/claude--claude-code-api-rate-limit-issues-on-pro-plan--b75b1cc6/1-march-8-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {March820261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
