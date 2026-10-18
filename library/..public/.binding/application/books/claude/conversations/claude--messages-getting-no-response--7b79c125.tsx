import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--messages-getting-no-response--7b79c125/.book';
import Cover from '../../../../../../.claude/.conversations/claude--messages-getting-no-response--7b79c125/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--messages-getting-no-response--7b79c125/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--messages-getting-no-response--7b79c125/.table';
import February2120261 from '../../../../../../.claude/.conversations/claude--messages-getting-no-response--7b79c125/1-february-21-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {February2120261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
