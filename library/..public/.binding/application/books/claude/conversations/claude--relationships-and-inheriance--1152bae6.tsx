import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--relationships-and-inheriance--1152bae6/.book';
import Cover from '../../../../../../.claude/.conversations/claude--relationships-and-inheriance--1152bae6/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--relationships-and-inheriance--1152bae6/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--relationships-and-inheriance--1152bae6/.table';
import July420261 from '../../../../../../.claude/.conversations/claude--relationships-and-inheriance--1152bae6/1-july-4-2026';
import July520262 from '../../../../../../.claude/.conversations/claude--relationships-and-inheriance--1152bae6/2-july-5-2026';
import July620263 from '../../../../../../.claude/.conversations/claude--relationships-and-inheriance--1152bae6/3-july-6-2026';
import July720264 from '../../../../../../.claude/.conversations/claude--relationships-and-inheriance--1152bae6/4-july-7-2026';
import July820265 from '../../../../../../.claude/.conversations/claude--relationships-and-inheriance--1152bae6/5-july-8-2026';
import July920266 from '../../../../../../.claude/.conversations/claude--relationships-and-inheriance--1152bae6/6-july-9-2026';
import July1120267 from '../../../../../../.claude/.conversations/claude--relationships-and-inheriance--1152bae6/7-july-11-2026';
import July1320268 from '../../../../../../.claude/.conversations/claude--relationships-and-inheriance--1152bae6/8-july-13-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {July420261()}
        {July520262()}
        {July620263()}
        {July720264()}
        {July820265()}
        {July920266()}
        {July1120267()}
        {July1320268()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
