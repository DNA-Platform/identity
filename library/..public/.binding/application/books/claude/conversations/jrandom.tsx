import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/jrandom/.book';
import Cover from '../../../../../../.claude/.conversations/jrandom/.cover';
import Synopsis from '../../../../../../.claude/.conversations/jrandom/.synopsis';
import Table from '../../../../../../.claude/.conversations/jrandom/.table';
import January1120261 from '../../../../../../.claude/.conversations/jrandom/1-january-11-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January1120261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
