import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--ai-consumable-tech-stack-architecture--3d9e1597/.book';
import Cover from '../../../../../../.claude/.conversations/claude--ai-consumable-tech-stack-architecture--3d9e1597/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--ai-consumable-tech-stack-architecture--3d9e1597/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--ai-consumable-tech-stack-architecture--3d9e1597/.table';
import May1120261 from '../../../../../../.claude/.conversations/claude--ai-consumable-tech-stack-architecture--3d9e1597/1-may-11-2026';
import May1220262 from '../../../../../../.claude/.conversations/claude--ai-consumable-tech-stack-architecture--3d9e1597/2-may-12-2026';

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
