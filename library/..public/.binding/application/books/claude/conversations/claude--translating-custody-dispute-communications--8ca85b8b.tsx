import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--translating-custody-dispute-communications--8ca85b8b/.book';
import Cover from '../../../../../../.claude/.conversations/claude--translating-custody-dispute-communications--8ca85b8b/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--translating-custody-dispute-communications--8ca85b8b/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--translating-custody-dispute-communications--8ca85b8b/.table';
import December1520251 from '../../../../../../.claude/.conversations/claude--translating-custody-dispute-communications--8ca85b8b/1-december-15-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {December1520251()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
