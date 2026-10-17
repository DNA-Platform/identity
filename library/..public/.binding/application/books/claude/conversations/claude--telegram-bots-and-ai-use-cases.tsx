import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--telegram-bots-and-ai-use-cases/.book';
import Cover from '../../../../../../.claude/.conversations/claude--telegram-bots-and-ai-use-cases/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--telegram-bots-and-ai-use-cases/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--telegram-bots-and-ai-use-cases/.table';
import May820261 from '../../../../../../.claude/.conversations/claude--telegram-bots-and-ai-use-cases/1-may-8-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {May820261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
