import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--solanas-creation-and-simplex-integration--682e9fa5/.book';
import Cover from '../../../../../../.claude/.conversations/claude--solanas-creation-and-simplex-integration--682e9fa5/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--solanas-creation-and-simplex-integration--682e9fa5/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--solanas-creation-and-simplex-integration--682e9fa5/.table';
import May2120261 from '../../../../../../.claude/.conversations/claude--solanas-creation-and-simplex-integration--682e9fa5/1-may-21-2026';
import May2220262 from '../../../../../../.claude/.conversations/claude--solanas-creation-and-simplex-integration--682e9fa5/2-may-22-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {May2120261()}
        {May2220262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
