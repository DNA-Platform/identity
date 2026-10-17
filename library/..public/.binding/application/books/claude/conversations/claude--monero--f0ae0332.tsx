import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--monero--f0ae0332/.book';
import Cover from '../../../../../../.claude/.conversations/claude--monero--f0ae0332/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--monero--f0ae0332/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--monero--f0ae0332/.table';
import January1120261 from '../../../../../../.claude/.conversations/claude--monero--f0ae0332/1-january-11-2026';

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
