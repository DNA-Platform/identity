import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--foundations-types-and-properties--3eecc63c/.book';
import Cover from '../../../../../../.claude/.conversations/claude--foundations-types-and-properties--3eecc63c/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--foundations-types-and-properties--3eecc63c/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--foundations-types-and-properties--3eecc63c/.table';
import August3120261 from '../../../../../../.claude/.conversations/claude--foundations-types-and-properties--3eecc63c/1-august-31-2026';
import September520262 from '../../../../../../.claude/.conversations/claude--foundations-types-and-properties--3eecc63c/2-september-5-2026';
import September620263 from '../../../../../../.claude/.conversations/claude--foundations-types-and-properties--3eecc63c/3-september-6-2026';
import September720264 from '../../../../../../.claude/.conversations/claude--foundations-types-and-properties--3eecc63c/4-september-7-2026';
import September820265 from '../../../../../../.claude/.conversations/claude--foundations-types-and-properties--3eecc63c/5-september-8-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {August3120261()}
        {September520262()}
        {September620263()}
        {September720264()}
        {September820265()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
