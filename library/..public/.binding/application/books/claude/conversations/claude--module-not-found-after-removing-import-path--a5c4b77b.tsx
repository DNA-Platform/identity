import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--module-not-found-after-removing-import-path--a5c4b77b/.book';
import Cover from '../../../../../../.claude/.conversations/claude--module-not-found-after-removing-import-path--a5c4b77b/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--module-not-found-after-removing-import-path--a5c4b77b/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--module-not-found-after-removing-import-path--a5c4b77b/.table';
import November120251 from '../../../../../../.claude/.conversations/claude--module-not-found-after-removing-import-path--a5c4b77b/1-november-1-2025';
import November220252 from '../../../../../../.claude/.conversations/claude--module-not-found-after-removing-import-path--a5c4b77b/2-november-2-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {November120251()}
        {November220252()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
