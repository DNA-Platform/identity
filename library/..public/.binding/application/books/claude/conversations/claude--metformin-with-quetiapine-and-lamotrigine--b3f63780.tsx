import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--metformin-with-quetiapine-and-lamotrigine--b3f63780/.book';
import Cover from '../../../../../../.claude/.conversations/claude--metformin-with-quetiapine-and-lamotrigine--b3f63780/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--metformin-with-quetiapine-and-lamotrigine--b3f63780/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--metformin-with-quetiapine-and-lamotrigine--b3f63780/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--metformin-with-quetiapine-and-lamotrigine--b3f63780/1-conversation';

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
