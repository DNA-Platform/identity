import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--one-dimensional-hilbert-space-in-closed-universes--0d92dc7c/.book';
import Cover from '../../../../../../.claude/.conversations/claude--one-dimensional-hilbert-space-in-closed-universes--0d92dc7c/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--one-dimensional-hilbert-space-in-closed-universes--0d92dc7c/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--one-dimensional-hilbert-space-in-closed-universes--0d92dc7c/.table';
import April420261 from '../../../../../../.claude/.conversations/claude--one-dimensional-hilbert-space-in-closed-universes--0d92dc7c/1-april-4-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {April420261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
