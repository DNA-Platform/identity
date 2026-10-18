import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--translation-request-to-russian--5e95e85d/.book';
import Cover from '../../../../../../.claude/.conversations/claude--translation-request-to-russian--5e95e85d/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--translation-request-to-russian--5e95e85d/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--translation-request-to-russian--5e95e85d/.table';
import March1720261 from '../../../../../../.claude/.conversations/claude--translation-request-to-russian--5e95e85d/1-march-17-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {March1720261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
