import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/frustration-with-ai-reasoning-and-communication-gaps/.book';
import Cover from '../../../../../../.claude/.conversations/frustration-with-ai-reasoning-and-communication-gaps/.cover';
import Synopsis from '../../../../../../.claude/.conversations/frustration-with-ai-reasoning-and-communication-gaps/.synopsis';
import Table from '../../../../../../.claude/.conversations/frustration-with-ai-reasoning-and-communication-gaps/.table';
import June1720261 from '../../../../../../.claude/.conversations/frustration-with-ai-reasoning-and-communication-gaps/1-june-17-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June1720261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
