import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--shipping-belongings-from-new-york-to-georgia--dd7b9e6a/.book';
import Cover from '../../../../../../.claude/.conversations/claude--shipping-belongings-from-new-york-to-georgia--dd7b9e6a/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--shipping-belongings-from-new-york-to-georgia--dd7b9e6a/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--shipping-belongings-from-new-york-to-georgia--dd7b9e6a/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--shipping-belongings-from-new-york-to-georgia--dd7b9e6a/1-conversation';

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
