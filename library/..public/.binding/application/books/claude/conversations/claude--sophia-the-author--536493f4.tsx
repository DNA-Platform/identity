import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--sophia-the-author--536493f4/.book';
import Cover from '../../../../../../.claude/.conversations/claude--sophia-the-author--536493f4/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--sophia-the-author--536493f4/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--sophia-the-author--536493f4/.table';
import March2220251 from '../../../../../../.claude/.conversations/claude--sophia-the-author--536493f4/1-march-22-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {March2220251()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
