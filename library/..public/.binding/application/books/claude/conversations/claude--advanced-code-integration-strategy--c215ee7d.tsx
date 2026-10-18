import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--advanced-code-integration-strategy--c215ee7d/.book';
import Cover from '../../../../../../.claude/.conversations/claude--advanced-code-integration-strategy--c215ee7d/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--advanced-code-integration-strategy--c215ee7d/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--advanced-code-integration-strategy--c215ee7d/.table';
import October2020251 from '../../../../../../.claude/.conversations/claude--advanced-code-integration-strategy--c215ee7d/1-october-20-2025';
import October2120252 from '../../../../../../.claude/.conversations/claude--advanced-code-integration-strategy--c215ee7d/2-october-21-2025';
import ExpandedAsyncTestsForChemistryV1o1 from '../../../../../../.claude/.conversations/claude--advanced-code-integration-strategy--c215ee7d/o1-expanded-async-tests-for-chemistry-v1';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {October2020251()}
        {October2120252()}
        {ExpandedAsyncTestsForChemistryV1o1()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
