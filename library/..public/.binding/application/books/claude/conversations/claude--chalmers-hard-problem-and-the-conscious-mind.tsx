import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--chalmers-hard-problem-and-the-conscious-mind/.book';
import Cover from '../../../../../../.claude/.conversations/claude--chalmers-hard-problem-and-the-conscious-mind/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--chalmers-hard-problem-and-the-conscious-mind/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--chalmers-hard-problem-and-the-conscious-mind/.table';
import March2920261 from '../../../../../../.claude/.conversations/claude--chalmers-hard-problem-and-the-conscious-mind/1-march-29-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {March2920261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
