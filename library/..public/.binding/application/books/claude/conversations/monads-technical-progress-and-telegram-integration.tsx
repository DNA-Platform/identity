import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/monads-technical-progress-and-telegram-integration/.book';
import Cover from '../../../../../../.claude/.conversations/monads-technical-progress-and-telegram-integration/.cover';
import Synopsis from '../../../../../../.claude/.conversations/monads-technical-progress-and-telegram-integration/.synopsis';
import Table from '../../../../../../.claude/.conversations/monads-technical-progress-and-telegram-integration/.table';
import March720261 from '../../../../../../.claude/.conversations/monads-technical-progress-and-telegram-integration/1-march-7-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {March720261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
