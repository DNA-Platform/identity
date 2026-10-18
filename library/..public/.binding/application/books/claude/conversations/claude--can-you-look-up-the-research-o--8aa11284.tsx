import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--can-you-look-up-the-research-o--8aa11284/.book';
import Cover from '../../../../../../.claude/.conversations/claude--can-you-look-up-the-research-o--8aa11284/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--can-you-look-up-the-research-o--8aa11284/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--can-you-look-up-the-research-o--8aa11284/.table';
import June1620261 from '../../../../../../.claude/.conversations/claude--can-you-look-up-the-research-o--8aa11284/1-june-16-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June1620261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
