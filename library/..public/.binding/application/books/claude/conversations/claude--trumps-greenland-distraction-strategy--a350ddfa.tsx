import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--trumps-greenland-distraction-strategy--a350ddfa/.book';
import Cover from '../../../../../../.claude/.conversations/claude--trumps-greenland-distraction-strategy--a350ddfa/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--trumps-greenland-distraction-strategy--a350ddfa/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--trumps-greenland-distraction-strategy--a350ddfa/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--trumps-greenland-distraction-strategy--a350ddfa/1-conversation';

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
