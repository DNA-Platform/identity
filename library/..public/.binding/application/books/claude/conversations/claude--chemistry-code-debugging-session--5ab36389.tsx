import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--chemistry-code-debugging-session--5ab36389/.book';
import Cover from '../../../../../../.claude/.conversations/claude--chemistry-code-debugging-session--5ab36389/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--chemistry-code-debugging-session--5ab36389/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--chemistry-code-debugging-session--5ab36389/.table';
import October220251 from '../../../../../../.claude/.conversations/claude--chemistry-code-debugging-session--5ab36389/1-october-2-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {October220251()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
