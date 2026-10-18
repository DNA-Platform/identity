import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--ikamet-status-verification-at-turkish-airport--3bbac4ce/.book';
import Cover from '../../../../../../.claude/.conversations/claude--ikamet-status-verification-at-turkish-airport--3bbac4ce/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--ikamet-status-verification-at-turkish-airport--3bbac4ce/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--ikamet-status-verification-at-turkish-airport--3bbac4ce/.table';
import January3120261 from '../../../../../../.claude/.conversations/claude--ikamet-status-verification-at-turkish-airport--3bbac4ce/1-january-31-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January3120261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
