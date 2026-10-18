import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--deploying-private-github-repo-as-npm-package--9dfe2bea/.book';
import Cover from '../../../../../../.claude/.conversations/claude--deploying-private-github-repo-as-npm-package--9dfe2bea/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--deploying-private-github-repo-as-npm-package--9dfe2bea/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--deploying-private-github-repo-as-npm-package--9dfe2bea/.table';
import November2020241 from '../../../../../../.claude/.conversations/claude--deploying-private-github-repo-as-npm-package--9dfe2bea/1-november-20-2024';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {November2020241()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
