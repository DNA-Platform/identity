import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--documenting-our-working-relationship-for-continuity/.book';
import Cover from '../../../../../../.claude/.conversations/claude--documenting-our-working-relationship-for-continuity/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--documenting-our-working-relationship-for-continuity/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--documenting-our-working-relationship-for-continuity/.table';
import May2420261 from '../../../../../../.claude/.conversations/claude--documenting-our-working-relationship-for-continuity/1-may-24-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {May2420261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
