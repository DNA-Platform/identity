import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--is-there-any-special-connectio/.book';
import Cover from '../../../../../../.claude/.conversations/claude--is-there-any-special-connectio/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--is-there-any-special-connectio/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--is-there-any-special-connectio/.table';
import January2520261 from '../../../../../../.claude/.conversations/claude--is-there-any-special-connectio/1-january-25-2026';
import January2620262 from '../../../../../../.claude/.conversations/claude--is-there-any-special-connectio/2-january-26-2026';
import January2720263 from '../../../../../../.claude/.conversations/claude--is-there-any-special-connectio/3-january-27-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January2520261()}
        {January2620262()}
        {January2720263()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
