import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--diagnosing-hard-drive-issues-from-command-line--50794b73/.book';
import Cover from '../../../../../../.claude/.conversations/claude--diagnosing-hard-drive-issues-from-command-line--50794b73/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--diagnosing-hard-drive-issues-from-command-line--50794b73/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--diagnosing-hard-drive-issues-from-command-line--50794b73/.table';
import April2020261 from '../../../../../../.claude/.conversations/claude--diagnosing-hard-drive-issues-from-command-line--50794b73/1-april-20-2026';
import April2120262 from '../../../../../../.claude/.conversations/claude--diagnosing-hard-drive-issues-from-command-line--50794b73/2-april-21-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {April2020261()}
        {April2120262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
