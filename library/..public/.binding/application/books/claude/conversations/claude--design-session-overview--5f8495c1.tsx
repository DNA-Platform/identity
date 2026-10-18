import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--design-session-overview--5f8495c1/.book';
import Cover from '../../../../../../.claude/.conversations/claude--design-session-overview--5f8495c1/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--design-session-overview--5f8495c1/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--design-session-overview--5f8495c1/.table';
import October1320251 from '../../../../../../.claude/.conversations/claude--design-session-overview--5f8495c1/1-october-13-2025';
import October1420252 from '../../../../../../.claude/.conversations/claude--design-session-overview--5f8495c1/2-october-14-2025';
import October1520253 from '../../../../../../.claude/.conversations/claude--design-session-overview--5f8495c1/3-october-15-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {October1320251()}
        {October1420252()}
        {October1520253()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
