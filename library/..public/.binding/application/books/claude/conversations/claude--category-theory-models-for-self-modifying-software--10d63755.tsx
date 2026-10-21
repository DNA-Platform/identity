import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--category-theory-models-for-self-modifying-software--10d63755/.book';
import Cover from '../../../../../../.claude/.conversations/claude--category-theory-models-for-self-modifying-software--10d63755/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--category-theory-models-for-self-modifying-software--10d63755/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--category-theory-models-for-self-modifying-software--10d63755/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--category-theory-models-for-self-modifying-software--10d63755/1-conversation';

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
