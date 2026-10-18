import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--busy-project-apology--f93751b5/.book';
import Cover from '../../../../../../.claude/.conversations/claude--busy-project-apology--f93751b5/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--busy-project-apology--f93751b5/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--busy-project-apology--f93751b5/.table';
import September220251 from '../../../../../../.claude/.conversations/claude--busy-project-apology--f93751b5/1-september-2-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {September220251()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
