import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--iterative-fibonacci-function-in-python--1f21026e/.book';
import Cover from '../../../../../../.claude/.conversations/claude--iterative-fibonacci-function-in-python--1f21026e/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--iterative-fibonacci-function-in-python--1f21026e/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--iterative-fibonacci-function-in-python--1f21026e/.table';
import June2120261 from '../../../../../../.claude/.conversations/claude--iterative-fibonacci-function-in-python--1f21026e/1-june-21-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June2120261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
