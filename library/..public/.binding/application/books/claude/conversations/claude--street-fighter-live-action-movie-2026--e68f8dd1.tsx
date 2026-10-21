import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--street-fighter-live-action-movie-2026--e68f8dd1/.book';
import Cover from '../../../../../../.claude/.conversations/claude--street-fighter-live-action-movie-2026--e68f8dd1/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--street-fighter-live-action-movie-2026--e68f8dd1/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--street-fighter-live-action-movie-2026--e68f8dd1/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--street-fighter-live-action-movie-2026--e68f8dd1/1-conversation';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {Conversation1()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
