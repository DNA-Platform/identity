import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--fiverrs-connection-to-telegrams-mira-ai/.book';
import Cover from '../../../../../../.claude/.conversations/claude--fiverrs-connection-to-telegrams-mira-ai/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--fiverrs-connection-to-telegrams-mira-ai/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--fiverrs-connection-to-telegrams-mira-ai/.table';
import July2820261 from '../../../../../../.claude/.conversations/claude--fiverrs-connection-to-telegrams-mira-ai/1-july-28-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {July2820261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
