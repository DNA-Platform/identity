import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--american-public-reaction-to-iran-conflict--96458699/.book';
import Cover from '../../../../../../.claude/.conversations/claude--american-public-reaction-to-iran-conflict--96458699/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--american-public-reaction-to-iran-conflict--96458699/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--american-public-reaction-to-iran-conflict--96458699/.table';
import March3120261 from '../../../../../../.claude/.conversations/claude--american-public-reaction-to-iran-conflict--96458699/1-march-31-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {March3120261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
