import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--trumps-greenland-strategy-and-negotiation-tactics--8f9f43b0/.book';
import Cover from '../../../../../../.claude/.conversations/claude--trumps-greenland-strategy-and-negotiation-tactics--8f9f43b0/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--trumps-greenland-strategy-and-negotiation-tactics--8f9f43b0/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--trumps-greenland-strategy-and-negotiation-tactics--8f9f43b0/.table';
import January1920261 from '../../../../../../.claude/.conversations/claude--trumps-greenland-strategy-and-negotiation-tactics--8f9f43b0/1-january-19-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January1920261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
