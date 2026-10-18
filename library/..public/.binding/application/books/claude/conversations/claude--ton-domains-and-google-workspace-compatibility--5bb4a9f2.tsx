import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--ton-domains-and-google-workspace-compatibility--5bb4a9f2/.book';
import Cover from '../../../../../../.claude/.conversations/claude--ton-domains-and-google-workspace-compatibility--5bb4a9f2/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--ton-domains-and-google-workspace-compatibility--5bb4a9f2/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--ton-domains-and-google-workspace-compatibility--5bb4a9f2/.table';
import February1120261 from '../../../../../../.claude/.conversations/claude--ton-domains-and-google-workspace-compatibility--5bb4a9f2/1-february-11-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {February1120261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
