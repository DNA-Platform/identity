import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--exploring-the-connections-between-eds-adhd-and-neurotransmit--48dc2d67/.book';
import Cover from '../../../../../../.claude/.conversations/claude--exploring-the-connections-between-eds-adhd-and-neurotransmit--48dc2d67/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--exploring-the-connections-between-eds-adhd-and-neurotransmit--48dc2d67/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--exploring-the-connections-between-eds-adhd-and-neurotransmit--48dc2d67/.table';
import November820241 from '../../../../../../.claude/.conversations/claude--exploring-the-connections-between-eds-adhd-and-neurotransmit--48dc2d67/1-november-8-2024';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {November820241()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
