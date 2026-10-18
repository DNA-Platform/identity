import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--setting-up-ssh-keys-for-github-on-windows--5305e691/.book';
import Cover from '../../../../../../.claude/.conversations/claude--setting-up-ssh-keys-for-github-on-windows--5305e691/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--setting-up-ssh-keys-for-github-on-windows--5305e691/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--setting-up-ssh-keys-for-github-on-windows--5305e691/.table';
import February1320261 from '../../../../../../.claude/.conversations/claude--setting-up-ssh-keys-for-github-on-windows--5305e691/1-february-13-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {February1320261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
