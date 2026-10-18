import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--days-alive-from-march-2017-to-april-2026--f5116889/.book';
import Cover from '../../../../../../.claude/.conversations/claude--days-alive-from-march-2017-to-april-2026--f5116889/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--days-alive-from-march-2017-to-april-2026--f5116889/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--days-alive-from-march-2017-to-april-2026--f5116889/.table';
import April2420261 from '../../../../../../.claude/.conversations/claude--days-alive-from-march-2017-to-april-2026--f5116889/1-april-24-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {April2420261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
