import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--chemistry-ts-codebase-overview--38fd52e2/.book';
import Cover from '../../../../../../.claude/.conversations/claude--chemistry-ts-codebase-overview--38fd52e2/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--chemistry-ts-codebase-overview--38fd52e2/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--chemistry-ts-codebase-overview--38fd52e2/.table';
import October3020251 from '../../../../../../.claude/.conversations/claude--chemistry-ts-codebase-overview--38fd52e2/1-october-30-2025';
import October3120252 from '../../../../../../.claude/.conversations/claude--chemistry-ts-codebase-overview--38fd52e2/2-october-31-2025';
import November120253 from '../../../../../../.claude/.conversations/claude--chemistry-ts-codebase-overview--38fd52e2/3-november-1-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {October3020251()}
        {October3120252()}
        {November120253()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
