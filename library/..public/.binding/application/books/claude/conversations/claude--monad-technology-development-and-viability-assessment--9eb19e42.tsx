import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--monad-technology-development-and-viability-assessment--9eb19e42/.book';
import Cover from '../../../../../../.claude/.conversations/claude--monad-technology-development-and-viability-assessment--9eb19e42/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--monad-technology-development-and-viability-assessment--9eb19e42/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--monad-technology-development-and-viability-assessment--9eb19e42/.table';
import May420261 from '../../../../../../.claude/.conversations/claude--monad-technology-development-and-viability-assessment--9eb19e42/1-may-4-2026';

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
