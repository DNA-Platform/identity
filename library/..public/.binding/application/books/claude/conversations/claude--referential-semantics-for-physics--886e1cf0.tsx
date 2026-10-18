import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--referential-semantics-for-physics--886e1cf0/.book';
import Cover from '../../../../../../.claude/.conversations/claude--referential-semantics-for-physics--886e1cf0/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--referential-semantics-for-physics--886e1cf0/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--referential-semantics-for-physics--886e1cf0/.table';
import March120261 from '../../../../../../.claude/.conversations/claude--referential-semantics-for-physics--886e1cf0/1-march-1-2026';
import March220262 from '../../../../../../.claude/.conversations/claude--referential-semantics-for-physics--886e1cf0/2-march-2-2026';
import March320263 from '../../../../../../.claude/.conversations/claude--referential-semantics-for-physics--886e1cf0/3-march-3-2026';
import March520264 from '../../../../../../.claude/.conversations/claude--referential-semantics-for-physics--886e1cf0/4-march-5-2026';
import March620265 from '../../../../../../.claude/.conversations/claude--referential-semantics-for-physics--886e1cf0/5-march-6-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {March120261()}
        {March220262()}
        {March320263()}
        {March520264()}
        {March620265()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
