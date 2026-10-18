import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--english-boarding-schools-for-children-in-georgia--50b227a4/.book';
import Cover from '../../../../../../.claude/.conversations/claude--english-boarding-schools-for-children-in-georgia--50b227a4/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--english-boarding-schools-for-children-in-georgia--50b227a4/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--english-boarding-schools-for-children-in-georgia--50b227a4/.table';
import May2120261 from '../../../../../../.claude/.conversations/claude--english-boarding-schools-for-children-in-georgia--50b227a4/1-may-21-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {May2120261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
