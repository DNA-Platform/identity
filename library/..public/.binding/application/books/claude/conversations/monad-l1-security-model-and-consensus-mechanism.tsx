import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/monad-l1-security-model-and-consensus-mechanism/.book';
import Cover from '../../../../../../.claude/.conversations/monad-l1-security-model-and-consensus-mechanism/.cover';
import Synopsis from '../../../../../../.claude/.conversations/monad-l1-security-model-and-consensus-mechanism/.synopsis';
import Table from '../../../../../../.claude/.conversations/monad-l1-security-model-and-consensus-mechanism/.table';
import February2020261 from '../../../../../../.claude/.conversations/monad-l1-security-model-and-consensus-mechanism/1-february-20-2026';
import February2120262 from '../../../../../../.claude/.conversations/monad-l1-security-model-and-consensus-mechanism/2-february-21-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {February2020261()}
        {February2120262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
