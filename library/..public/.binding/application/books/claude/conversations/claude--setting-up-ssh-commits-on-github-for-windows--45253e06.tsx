import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--setting-up-ssh-commits-on-github-for-windows--45253e06/.book';
import Cover from '../../../../../../.claude/.conversations/claude--setting-up-ssh-commits-on-github-for-windows--45253e06/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--setting-up-ssh-commits-on-github-for-windows--45253e06/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--setting-up-ssh-commits-on-github-for-windows--45253e06/.table';
import March1420261 from '../../../../../../.claude/.conversations/claude--setting-up-ssh-commits-on-github-for-windows--45253e06/1-march-14-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {March1420261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
