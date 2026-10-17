import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--category-theory-and-type-theory-foundations--672c6bed/.book';
import Cover from '../../../../../../.claude/.conversations/claude--category-theory-and-type-theory-foundations--672c6bed/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--category-theory-and-type-theory-foundations--672c6bed/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--category-theory-and-type-theory-foundations--672c6bed/.table';
import February620261 from '../../../../../../.claude/.conversations/claude--category-theory-and-type-theory-foundations--672c6bed/1-february-6-2026';
import February720262 from '../../../../../../.claude/.conversations/claude--category-theory-and-type-theory-foundations--672c6bed/2-february-7-2026';
import February820263 from '../../../../../../.claude/.conversations/claude--category-theory-and-type-theory-foundations--672c6bed/3-february-8-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {February620261()}
        {February720262()}
        {February820263()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
