import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--bitcoin-and-ton/.book';
import Cover from '../../../../../../.claude/.conversations/claude--bitcoin-and-ton/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--bitcoin-and-ton/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--bitcoin-and-ton/.table';
import January1120261 from '../../../../../../.claude/.conversations/claude--bitcoin-and-ton/1-january-11-2026';

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
