import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--subject-object-directionality-and-semantic-agency/.book';
import Cover from '../../../../../../.claude/.conversations/claude--subject-object-directionality-and-semantic-agency/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--subject-object-directionality-and-semantic-agency/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--subject-object-directionality-and-semantic-agency/.table';
import March520261 from '../../../../../../.claude/.conversations/claude--subject-object-directionality-and-semantic-agency/1-march-5-2026';

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
