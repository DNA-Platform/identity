import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--street-fighter-live-action-movie-2026--e68f8dd1/.book';
import Cover from '../../../../../../.claude/.conversations/claude--street-fighter-live-action-movie-2026--e68f8dd1/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--street-fighter-live-action-movie-2026--e68f8dd1/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--street-fighter-live-action-movie-2026--e68f8dd1/.table';
import April2120261 from '../../../../../../.claude/.conversations/claude--street-fighter-live-action-movie-2026--e68f8dd1/1-april-21-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {April2120261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
