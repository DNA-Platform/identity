import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--betamethasone-for-seborrheic-dermatitis--2491ddcf/.book';
import Cover from '../../../../../../.claude/.conversations/claude--betamethasone-for-seborrheic-dermatitis--2491ddcf/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--betamethasone-for-seborrheic-dermatitis--2491ddcf/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--betamethasone-for-seborrheic-dermatitis--2491ddcf/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--betamethasone-for-seborrheic-dermatitis--2491ddcf/1-conversation';

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
