import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--tonx-companys-ton-holdings-percentage/.book';
import Cover from '../../../../../../.claude/.conversations/claude--tonx-companys-ton-holdings-percentage/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--tonx-companys-ton-holdings-percentage/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--tonx-companys-ton-holdings-percentage/.table';
import January3120261 from '../../../../../../.claude/.conversations/claude--tonx-companys-ton-holdings-percentage/1-january-31-2026';
import February120262 from '../../../../../../.claude/.conversations/claude--tonx-companys-ton-holdings-percentage/2-february-1-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January3120261()}
        {February120262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
