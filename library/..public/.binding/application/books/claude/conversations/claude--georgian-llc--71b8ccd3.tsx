import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--georgian-llc--71b8ccd3/.book';
import Cover from '../../../../../../.claude/.conversations/claude--georgian-llc--71b8ccd3/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--georgian-llc--71b8ccd3/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--georgian-llc--71b8ccd3/.table';
import May1020261 from '../../../../../../.claude/.conversations/claude--georgian-llc--71b8ccd3/1-may-10-2026';
import May1220262 from '../../../../../../.claude/.conversations/claude--georgian-llc--71b8ccd3/2-may-12-2026';
import May1320263 from '../../../../../../.claude/.conversations/claude--georgian-llc--71b8ccd3/3-may-13-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {May1020261()}
        {May1220262()}
        {May1320263()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
