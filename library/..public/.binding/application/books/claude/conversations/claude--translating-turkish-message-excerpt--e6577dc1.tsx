import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--translating-turkish-message-excerpt--e6577dc1/.book';
import Cover from '../../../../../../.claude/.conversations/claude--translating-turkish-message-excerpt--e6577dc1/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--translating-turkish-message-excerpt--e6577dc1/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--translating-turkish-message-excerpt--e6577dc1/.table';
import April120261 from '../../../../../../.claude/.conversations/claude--translating-turkish-message-excerpt--e6577dc1/1-april-1-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {April120261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
