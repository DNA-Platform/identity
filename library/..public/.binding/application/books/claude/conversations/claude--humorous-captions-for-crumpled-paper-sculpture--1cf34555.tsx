import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--humorous-captions-for-crumpled-paper-sculpture--1cf34555/.book';
import Cover from '../../../../../../.claude/.conversations/claude--humorous-captions-for-crumpled-paper-sculpture--1cf34555/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--humorous-captions-for-crumpled-paper-sculpture--1cf34555/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--humorous-captions-for-crumpled-paper-sculpture--1cf34555/.table';
import October2520241 from '../../../../../../.claude/.conversations/claude--humorous-captions-for-crumpled-paper-sculpture--1cf34555/1-october-25-2024';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {October2520241()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
