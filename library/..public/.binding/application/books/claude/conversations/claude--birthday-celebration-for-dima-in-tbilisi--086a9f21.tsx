import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--birthday-celebration-for-dima-in-tbilisi--086a9f21/.book';
import Cover from '../../../../../../.claude/.conversations/claude--birthday-celebration-for-dima-in-tbilisi--086a9f21/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--birthday-celebration-for-dima-in-tbilisi--086a9f21/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--birthday-celebration-for-dima-in-tbilisi--086a9f21/.table';
import March1920261 from '../../../../../../.claude/.conversations/claude--birthday-celebration-for-dima-in-tbilisi--086a9f21/1-march-19-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {March1920261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
