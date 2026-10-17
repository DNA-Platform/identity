import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--bitcoin--c3b4dd81/.book';
import Cover from '../../../../../../.claude/.conversations/claude--bitcoin--c3b4dd81/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--bitcoin--c3b4dd81/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--bitcoin--c3b4dd81/.table';
import January1120261 from '../../../../../../.claude/.conversations/claude--bitcoin--c3b4dd81/1-january-11-2026';

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
