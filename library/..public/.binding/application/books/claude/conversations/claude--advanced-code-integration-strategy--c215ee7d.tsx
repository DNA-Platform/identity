import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--advanced-code-integration-strategy--c215ee7d/.book';
import Cover from '../../../../../../.claude/.conversations/claude--advanced-code-integration-strategy--c215ee7d/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--advanced-code-integration-strategy--c215ee7d/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--advanced-code-integration-strategy--c215ee7d/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--advanced-code-integration-strategy--c215ee7d/1-conversation';
import ExpandedAsyncTestsForChemistryV1o1 from '../../../../../../.claude/.conversations/claude--advanced-code-integration-strategy--c215ee7d/o1-expanded-async-tests-for-chemistry-v1';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {Conversation1()}
        {ExpandedAsyncTestsForChemistryV1o1()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
