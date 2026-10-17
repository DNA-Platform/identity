import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--fiverrs-connection-to-telegrams-mira-ai--2ebab90b/.book';
import Cover from '../../../../../../.claude/.conversations/claude--fiverrs-connection-to-telegrams-mira-ai--2ebab90b/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--fiverrs-connection-to-telegrams-mira-ai--2ebab90b/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--fiverrs-connection-to-telegrams-mira-ai--2ebab90b/.table';
import July2820261 from '../../../../../../.claude/.conversations/claude--fiverrs-connection-to-telegrams-mira-ai--2ebab90b/1-july-28-2026';

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
