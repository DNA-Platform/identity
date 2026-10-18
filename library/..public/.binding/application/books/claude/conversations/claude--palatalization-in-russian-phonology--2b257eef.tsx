import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--palatalization-in-russian-phonology--2b257eef/.book';
import Cover from '../../../../../../.claude/.conversations/claude--palatalization-in-russian-phonology--2b257eef/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--palatalization-in-russian-phonology--2b257eef/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--palatalization-in-russian-phonology--2b257eef/.table';
import April2320261 from '../../../../../../.claude/.conversations/claude--palatalization-in-russian-phonology--2b257eef/1-april-23-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {April2320261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
