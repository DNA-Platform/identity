import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--cetirizine-vs-claritin-comparison--4055087b/.book';
import Cover from '../../../../../../.claude/.conversations/claude--cetirizine-vs-claritin-comparison--4055087b/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--cetirizine-vs-claritin-comparison--4055087b/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--cetirizine-vs-claritin-comparison--4055087b/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--cetirizine-vs-claritin-comparison--4055087b/1-conversation';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {Conversation1()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
