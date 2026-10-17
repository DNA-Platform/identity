import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--monad-l1-security-model-and-consensus-mechanism--35932016/.book';
import Cover from '../../../../../../.claude/.conversations/claude--monad-l1-security-model-and-consensus-mechanism--35932016/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--monad-l1-security-model-and-consensus-mechanism--35932016/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--monad-l1-security-model-and-consensus-mechanism--35932016/.table';
import February2020261 from '../../../../../../.claude/.conversations/claude--monad-l1-security-model-and-consensus-mechanism--35932016/1-february-20-2026';
import February2120262 from '../../../../../../.claude/.conversations/claude--monad-l1-security-model-and-consensus-mechanism--35932016/2-february-21-2026';

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
