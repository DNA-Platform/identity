import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--configuring-extendscript-debugger-in-vs-code--9d78ecba/.book';
import Cover from '../../../../../../.claude/.conversations/claude--configuring-extendscript-debugger-in-vs-code--9d78ecba/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--configuring-extendscript-debugger-in-vs-code--9d78ecba/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--configuring-extendscript-debugger-in-vs-code--9d78ecba/.table';
import February720251 from '../../../../../../.claude/.conversations/claude--configuring-extendscript-debugger-in-vs-code--9d78ecba/1-february-7-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {February720251()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
