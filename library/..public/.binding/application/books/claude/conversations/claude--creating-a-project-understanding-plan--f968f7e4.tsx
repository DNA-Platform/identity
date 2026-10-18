import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--creating-a-project-understanding-plan--f968f7e4/.book';
import Cover from '../../../../../../.claude/.conversations/claude--creating-a-project-understanding-plan--f968f7e4/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--creating-a-project-understanding-plan--f968f7e4/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--creating-a-project-understanding-plan--f968f7e4/.table';
import January1520261 from '../../../../../../.claude/.conversations/claude--creating-a-project-understanding-plan--f968f7e4/1-january-15-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January1520261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
