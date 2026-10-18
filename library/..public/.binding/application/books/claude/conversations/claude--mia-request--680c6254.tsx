import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--mia-request--680c6254/.book';
import Cover from '../../../../../../.claude/.conversations/claude--mia-request--680c6254/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--mia-request--680c6254/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--mia-request--680c6254/.table';
import August2120261 from '../../../../../../.claude/.conversations/claude--mia-request--680c6254/1-august-21-2026';
import September220262 from '../../../../../../.claude/.conversations/claude--mia-request--680c6254/2-september-2-2026';
import October120263 from '../../../../../../.claude/.conversations/claude--mia-request--680c6254/3-october-1-2026';
import October520264 from '../../../../../../.claude/.conversations/claude--mia-request--680c6254/4-october-5-2026';
import October620265 from '../../../../../../.claude/.conversations/claude--mia-request--680c6254/5-october-6-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {August2120261()}
        {September220262()}
        {October120263()}
        {October520264()}
        {October620265()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
