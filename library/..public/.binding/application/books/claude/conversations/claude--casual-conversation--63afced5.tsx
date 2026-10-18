import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--casual-conversation--63afced5/.book';
import Cover from '../../../../../../.claude/.conversations/claude--casual-conversation--63afced5/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--casual-conversation--63afced5/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--casual-conversation--63afced5/.table';
import November2220251 from '../../../../../../.claude/.conversations/claude--casual-conversation--63afced5/1-november-22-2025';
import November2320252 from '../../../../../../.claude/.conversations/claude--casual-conversation--63afced5/2-november-23-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {November2220251()}
        {November2320252()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
