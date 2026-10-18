import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--generalized-anxiety-disorder-diagnosis-across-countries--c8269065/.book';
import Cover from '../../../../../../.claude/.conversations/claude--generalized-anxiety-disorder-diagnosis-across-countries--c8269065/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--generalized-anxiety-disorder-diagnosis-across-countries--c8269065/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--generalized-anxiety-disorder-diagnosis-across-countries--c8269065/.table';
import March520261 from '../../../../../../.claude/.conversations/claude--generalized-anxiety-disorder-diagnosis-across-countries--c8269065/1-march-5-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {March520261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
