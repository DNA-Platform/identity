import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--session-notes-for-disability-insurance-application--7f52e53d/.book';
import Cover from '../../../../../../.claude/.conversations/claude--session-notes-for-disability-insurance-application--7f52e53d/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--session-notes-for-disability-insurance-application--7f52e53d/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--session-notes-for-disability-insurance-application--7f52e53d/.table';
import April120261 from '../../../../../../.claude/.conversations/claude--session-notes-for-disability-insurance-application--7f52e53d/1-april-1-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {April120261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
