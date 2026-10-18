import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--freuds-structural-model-of-the-psyche--6f21fdb4/.book';
import Cover from '../../../../../../.claude/.conversations/claude--freuds-structural-model-of-the-psyche--6f21fdb4/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--freuds-structural-model-of-the-psyche--6f21fdb4/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--freuds-structural-model-of-the-psyche--6f21fdb4/.table';
import November1720241 from '../../../../../../.claude/.conversations/claude--freuds-structural-model-of-the-psyche--6f21fdb4/1-november-17-2024';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {November1720241()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
