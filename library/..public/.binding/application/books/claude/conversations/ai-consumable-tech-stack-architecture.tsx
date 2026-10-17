import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/ai-consumable-tech-stack-architecture/.book';
import Cover from '../../../../../../.claude/.conversations/ai-consumable-tech-stack-architecture/.cover';
import Synopsis from '../../../../../../.claude/.conversations/ai-consumable-tech-stack-architecture/.synopsis';
import Table from '../../../../../../.claude/.conversations/ai-consumable-tech-stack-architecture/.table';
import May1120261 from '../../../../../../.claude/.conversations/ai-consumable-tech-stack-architecture/1-may-11-2026';
import May1220262 from '../../../../../../.claude/.conversations/ai-consumable-tech-stack-architecture/2-may-12-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {May1120261()}
        {May1220262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
