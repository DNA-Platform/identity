import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--ai-ethics-and-emotional-competence--72c86266/.book';
import Cover from '../../../../../../.claude/.conversations/claude--ai-ethics-and-emotional-competence--72c86266/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--ai-ethics-and-emotional-competence--72c86266/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--ai-ethics-and-emotional-competence--72c86266/.table';
import December2920251 from '../../../../../../.claude/.conversations/claude--ai-ethics-and-emotional-competence--72c86266/1-december-29-2025';
import January620262 from '../../../../../../.claude/.conversations/claude--ai-ethics-and-emotional-competence--72c86266/2-january-6-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {December2920251()}
        {January620262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
