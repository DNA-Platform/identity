import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--betamethasone-for-seborrheic-dermatitis--2491ddcf/.book';
import Cover from '../../../../../../.claude/.conversations/claude--betamethasone-for-seborrheic-dermatitis--2491ddcf/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--betamethasone-for-seborrheic-dermatitis--2491ddcf/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--betamethasone-for-seborrheic-dermatitis--2491ddcf/.table';
import May1620261 from '../../../../../../.claude/.conversations/claude--betamethasone-for-seborrheic-dermatitis--2491ddcf/1-may-16-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {May1620261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
