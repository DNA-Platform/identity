import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--wise-us-listing-and-adr-comparison--e0f15ab3/.book';
import Cover from '../../../../../../.claude/.conversations/claude--wise-us-listing-and-adr-comparison--e0f15ab3/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--wise-us-listing-and-adr-comparison--e0f15ab3/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--wise-us-listing-and-adr-comparison--e0f15ab3/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--wise-us-listing-and-adr-comparison--e0f15ab3/1-conversation';

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
