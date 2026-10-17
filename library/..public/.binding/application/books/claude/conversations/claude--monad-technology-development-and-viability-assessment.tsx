import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--monad-technology-development-and-viability-assessment/.book';
import Cover from '../../../../../../.claude/.conversations/claude--monad-technology-development-and-viability-assessment/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--monad-technology-development-and-viability-assessment/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--monad-technology-development-and-viability-assessment/.table';
import May420261 from '../../../../../../.claude/.conversations/claude--monad-technology-development-and-viability-assessment/1-may-4-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {May420261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
