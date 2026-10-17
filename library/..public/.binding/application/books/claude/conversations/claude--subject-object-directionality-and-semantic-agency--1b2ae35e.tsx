import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--subject-object-directionality-and-semantic-agency--1b2ae35e/.book';
import Cover from '../../../../../../.claude/.conversations/claude--subject-object-directionality-and-semantic-agency--1b2ae35e/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--subject-object-directionality-and-semantic-agency--1b2ae35e/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--subject-object-directionality-and-semantic-agency--1b2ae35e/.table';
import March520261 from '../../../../../../.claude/.conversations/claude--subject-object-directionality-and-semantic-agency--1b2ae35e/1-march-5-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {March520261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
