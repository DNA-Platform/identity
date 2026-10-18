import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--nature-published-this-blurb-i--75d64146/.book';
import Cover from '../../../../../../.claude/.conversations/claude--nature-published-this-blurb-i--75d64146/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--nature-published-this-blurb-i--75d64146/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--nature-published-this-blurb-i--75d64146/.table';
import June1120261 from '../../../../../../.claude/.conversations/claude--nature-published-this-blurb-i--75d64146/1-june-11-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June1120261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
