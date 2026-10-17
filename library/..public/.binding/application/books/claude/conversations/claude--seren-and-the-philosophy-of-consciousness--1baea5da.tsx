import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--seren-and-the-philosophy-of-consciousness--1baea5da/.book';
import Cover from '../../../../../../.claude/.conversations/claude--seren-and-the-philosophy-of-consciousness--1baea5da/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--seren-and-the-philosophy-of-consciousness--1baea5da/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--seren-and-the-philosophy-of-consciousness--1baea5da/.table';
import April120261 from '../../../../../../.claude/.conversations/claude--seren-and-the-philosophy-of-consciousness--1baea5da/1-april-1-2026';
import April220262 from '../../../../../../.claude/.conversations/claude--seren-and-the-philosophy-of-consciousness--1baea5da/2-april-2-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {April120261()}
        {April220262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
