import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--mtonga/.book';
import Cover from '../../../../../../.claude/.conversations/claude--mtonga/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--mtonga/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--mtonga/.table';
import June520261 from '../../../../../../.claude/.conversations/claude--mtonga/1-june-5-2026';
import June1220262 from '../../../../../../.claude/.conversations/claude--mtonga/2-june-12-2026';
import June1320263 from '../../../../../../.claude/.conversations/claude--mtonga/3-june-13-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June520261()}
        {June1220262()}
        {June1320263()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
