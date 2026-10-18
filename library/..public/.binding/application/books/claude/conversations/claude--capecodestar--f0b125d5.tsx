import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--capecodestar--f0b125d5/.book';
import Cover from '../../../../../../.claude/.conversations/claude--capecodestar--f0b125d5/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--capecodestar--f0b125d5/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--capecodestar--f0b125d5/.table';
import May2520261 from '../../../../../../.claude/.conversations/claude--capecodestar--f0b125d5/1-may-25-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {May2520261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
