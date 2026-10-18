import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--anagram-of-douglas-hofstadter-to-female-name--5c972477/.book';
import Cover from '../../../../../../.claude/.conversations/claude--anagram-of-douglas-hofstadter-to-female-name--5c972477/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--anagram-of-douglas-hofstadter-to-female-name--5c972477/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--anagram-of-douglas-hofstadter-to-female-name--5c972477/.table';
import February520261 from '../../../../../../.claude/.conversations/claude--anagram-of-douglas-hofstadter-to-female-name--5c972477/1-february-5-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {February520261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
