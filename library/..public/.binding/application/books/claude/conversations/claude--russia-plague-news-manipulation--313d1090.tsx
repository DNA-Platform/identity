import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--russia-plague-news-manipulation--313d1090/.book';
import Cover from '../../../../../../.claude/.conversations/claude--russia-plague-news-manipulation--313d1090/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--russia-plague-news-manipulation--313d1090/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--russia-plague-news-manipulation--313d1090/.table';
import October620261 from '../../../../../../.claude/.conversations/claude--russia-plague-news-manipulation--313d1090/1-october-6-2026';
import October720262 from '../../../../../../.claude/.conversations/claude--russia-plague-news-manipulation--313d1090/2-october-7-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {October620261()}
        {October720262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
