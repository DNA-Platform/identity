import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--russia-china-cryptocurrency-collaboration--ef849a35/.book';
import Cover from '../../../../../../.claude/.conversations/claude--russia-china-cryptocurrency-collaboration--ef849a35/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--russia-china-cryptocurrency-collaboration--ef849a35/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--russia-china-cryptocurrency-collaboration--ef849a35/.table';
import November720241 from '../../../../../../.claude/.conversations/claude--russia-china-cryptocurrency-collaboration--ef849a35/1-november-7-2024';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {November720241()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
