import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--monad-valuation/.book';
import Cover from '../../../../../../.claude/.conversations/claude--monad-valuation/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--monad-valuation/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--monad-valuation/.table';
import January820261 from '../../../../../../.claude/.conversations/claude--monad-valuation/1-january-8-2026';
import January920262 from '../../../../../../.claude/.conversations/claude--monad-valuation/2-january-9-2026';
import January1020263 from '../../../../../../.claude/.conversations/claude--monad-valuation/3-january-10-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January820261()}
        {January920262()}
        {January1020263()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
