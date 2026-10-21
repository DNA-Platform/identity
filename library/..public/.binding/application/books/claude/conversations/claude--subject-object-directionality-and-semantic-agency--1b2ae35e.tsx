import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--subject-object-directionality-and-semantic-agency--1b2ae35e/.book';
import Cover from '../../../../../../.claude/.conversations/claude--subject-object-directionality-and-semantic-agency--1b2ae35e/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--subject-object-directionality-and-semantic-agency--1b2ae35e/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--subject-object-directionality-and-semantic-agency--1b2ae35e/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--subject-object-directionality-and-semantic-agency--1b2ae35e/1-conversation';

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
