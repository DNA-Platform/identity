import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--english-news-channels-on-telegram--22bb3e3b/.book';
import Cover from '../../../../../../.claude/.conversations/claude--english-news-channels-on-telegram--22bb3e3b/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--english-news-channels-on-telegram--22bb3e3b/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--english-news-channels-on-telegram--22bb3e3b/.table';
import February1320261 from '../../../../../../.claude/.conversations/claude--english-news-channels-on-telegram--22bb3e3b/1-february-13-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {February1320261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
