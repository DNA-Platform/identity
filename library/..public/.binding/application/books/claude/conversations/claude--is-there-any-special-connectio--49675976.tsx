import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--is-there-any-special-connectio--49675976/.book';
import Cover from '../../../../../../.claude/.conversations/claude--is-there-any-special-connectio--49675976/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--is-there-any-special-connectio--49675976/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--is-there-any-special-connectio--49675976/.table';
import January2520261 from '../../../../../../.claude/.conversations/claude--is-there-any-special-connectio--49675976/1-january-25-2026';
import January2620262 from '../../../../../../.claude/.conversations/claude--is-there-any-special-connectio--49675976/2-january-26-2026';
import January2720263 from '../../../../../../.claude/.conversations/claude--is-there-any-special-connectio--49675976/3-january-27-2026';

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
