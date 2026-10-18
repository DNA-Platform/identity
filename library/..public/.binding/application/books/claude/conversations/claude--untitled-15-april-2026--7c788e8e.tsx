import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-15-april-2026--7c788e8e/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-15-april-2026--7c788e8e/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-15-april-2026--7c788e8e/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-15-april-2026--7c788e8e/.table';
import April1520261 from '../../../../../../.claude/.conversations/claude--untitled-15-april-2026--7c788e8e/1-april-15-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {April1520261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
