import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--quetiapine-induced-hallucinations-and-medication-interaction--5c933de0/.book';
import Cover from '../../../../../../.claude/.conversations/claude--quetiapine-induced-hallucinations-and-medication-interaction--5c933de0/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--quetiapine-induced-hallucinations-and-medication-interaction--5c933de0/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--quetiapine-induced-hallucinations-and-medication-interaction--5c933de0/.table';
import July2020261 from '../../../../../../.claude/.conversations/claude--quetiapine-induced-hallucinations-and-medication-interaction--5c933de0/1-july-20-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {July2020261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
