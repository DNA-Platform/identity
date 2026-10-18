import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--white-dot-on-penelopes-nose--9e92489f/.book';
import Cover from '../../../../../../.claude/.conversations/claude--white-dot-on-penelopes-nose--9e92489f/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--white-dot-on-penelopes-nose--9e92489f/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--white-dot-on-penelopes-nose--9e92489f/.table';
import February1620261 from '../../../../../../.claude/.conversations/claude--white-dot-on-penelopes-nose--9e92489f/1-february-16-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {February1620261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
