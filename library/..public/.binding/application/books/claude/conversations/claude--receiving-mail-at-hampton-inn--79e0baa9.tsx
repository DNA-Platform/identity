import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--receiving-mail-at-hampton-inn--79e0baa9/.book';
import Cover from '../../../../../../.claude/.conversations/claude--receiving-mail-at-hampton-inn--79e0baa9/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--receiving-mail-at-hampton-inn--79e0baa9/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--receiving-mail-at-hampton-inn--79e0baa9/.table';
import April2720261 from '../../../../../../.claude/.conversations/claude--receiving-mail-at-hampton-inn--79e0baa9/1-april-27-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {April2720261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
