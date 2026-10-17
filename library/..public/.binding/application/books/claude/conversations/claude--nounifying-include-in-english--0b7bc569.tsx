import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--nounifying-include-in-english--0b7bc569/.book';
import Cover from '../../../../../../.claude/.conversations/claude--nounifying-include-in-english--0b7bc569/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--nounifying-include-in-english--0b7bc569/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--nounifying-include-in-english--0b7bc569/.table';
import May1320261 from '../../../../../../.claude/.conversations/claude--nounifying-include-in-english--0b7bc569/1-may-13-2026';
import May1420262 from '../../../../../../.claude/.conversations/claude--nounifying-include-in-english--0b7bc569/2-may-14-2026';
import May1520263 from '../../../../../../.claude/.conversations/claude--nounifying-include-in-english--0b7bc569/3-may-15-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {May1320261()}
        {May1420262()}
        {May1520263()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
