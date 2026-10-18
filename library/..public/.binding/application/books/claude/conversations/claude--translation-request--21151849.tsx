import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--translation-request--21151849/.book';
import Cover from '../../../../../../.claude/.conversations/claude--translation-request--21151849/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--translation-request--21151849/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--translation-request--21151849/.table';
import June920261 from '../../../../../../.claude/.conversations/claude--translation-request--21151849/1-june-9-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June920261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
