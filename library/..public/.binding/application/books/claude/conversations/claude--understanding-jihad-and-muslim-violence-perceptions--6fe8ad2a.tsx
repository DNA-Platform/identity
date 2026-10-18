import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--understanding-jihad-and-muslim-violence-perceptions--6fe8ad2a/.book';
import Cover from '../../../../../../.claude/.conversations/claude--understanding-jihad-and-muslim-violence-perceptions--6fe8ad2a/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--understanding-jihad-and-muslim-violence-perceptions--6fe8ad2a/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--understanding-jihad-and-muslim-violence-perceptions--6fe8ad2a/.table';
import August3020261 from '../../../../../../.claude/.conversations/claude--understanding-jihad-and-muslim-violence-perceptions--6fe8ad2a/1-august-30-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {August3020261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
