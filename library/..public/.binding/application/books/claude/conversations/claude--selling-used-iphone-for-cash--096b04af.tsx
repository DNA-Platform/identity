import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--selling-used-iphone-for-cash--096b04af/.book';
import Cover from '../../../../../../.claude/.conversations/claude--selling-used-iphone-for-cash--096b04af/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--selling-used-iphone-for-cash--096b04af/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--selling-used-iphone-for-cash--096b04af/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--selling-used-iphone-for-cash--096b04af/1-conversation';

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
