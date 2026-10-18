import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--cetirizine-vs-claritin-comparison--4055087b/.book';
import Cover from '../../../../../../.claude/.conversations/claude--cetirizine-vs-claritin-comparison--4055087b/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--cetirizine-vs-claritin-comparison--4055087b/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--cetirizine-vs-claritin-comparison--4055087b/.table';
import March2520261 from '../../../../../../.claude/.conversations/claude--cetirizine-vs-claritin-comparison--4055087b/1-march-25-2026';
import April1420262 from '../../../../../../.claude/.conversations/claude--cetirizine-vs-claritin-comparison--4055087b/2-april-14-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {March2520261()}
        {April1420262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
