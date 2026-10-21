import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--is-there-any-special-connectio--49675976/.book';
import Cover from '../../../../../../.claude/.conversations/claude--is-there-any-special-connectio--49675976/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--is-there-any-special-connectio--49675976/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--is-there-any-special-connectio--49675976/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--is-there-any-special-connectio--49675976/1-conversation';

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
