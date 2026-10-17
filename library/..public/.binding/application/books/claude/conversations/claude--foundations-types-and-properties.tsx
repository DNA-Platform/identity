import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--foundations-types-and-properties/.book';
import Cover from '../../../../../../.claude/.conversations/claude--foundations-types-and-properties/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--foundations-types-and-properties/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--foundations-types-and-properties/.table';
import August3120261 from '../../../../../../.claude/.conversations/claude--foundations-types-and-properties/1-august-31-2026';
import September520262 from '../../../../../../.claude/.conversations/claude--foundations-types-and-properties/2-september-5-2026';
import September620263 from '../../../../../../.claude/.conversations/claude--foundations-types-and-properties/3-september-6-2026';
import September720264 from '../../../../../../.claude/.conversations/claude--foundations-types-and-properties/4-september-7-2026';
import September820265 from '../../../../../../.claude/.conversations/claude--foundations-types-and-properties/5-september-8-2026';

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
