import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--controlled-substance-pharmacies-in-tbilisi--6b0b6e6c/.book';
import Cover from '../../../../../../.claude/.conversations/claude--controlled-substance-pharmacies-in-tbilisi--6b0b6e6c/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--controlled-substance-pharmacies-in-tbilisi--6b0b6e6c/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--controlled-substance-pharmacies-in-tbilisi--6b0b6e6c/.table';
import April2220261 from '../../../../../../.claude/.conversations/claude--controlled-substance-pharmacies-in-tbilisi--6b0b6e6c/1-april-22-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {April2220261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
