import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--typescript-type-for-objects-with-prototypes--fe729f0d/.book';
import Cover from '../../../../../../.claude/.conversations/claude--typescript-type-for-objects-with-prototypes--fe729f0d/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--typescript-type-for-objects-with-prototypes--fe729f0d/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--typescript-type-for-objects-with-prototypes--fe729f0d/.table';
import November320251 from '../../../../../../.claude/.conversations/claude--typescript-type-for-objects-with-prototypes--fe729f0d/1-november-3-2025';
import November420252 from '../../../../../../.claude/.conversations/claude--typescript-type-for-objects-with-prototypes--fe729f0d/2-november-4-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {November320251()}
        {November420252()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
