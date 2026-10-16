import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/conservation-of-time-complexity/.book';
import Cover from '../../../../../../.claude/.conversations/conservation-of-time-complexity/.cover';
import Synopsis from '../../../../../../.claude/.conversations/conservation-of-time-complexity/.synopsis';
import Table from '../../../../../../.claude/.conversations/conservation-of-time-complexity/.table';
import March2120251 from '../../../../../../.claude/.conversations/conservation-of-time-complexity/1-march-21-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {March2120251()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
