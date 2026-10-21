import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--vat-registration-and-tax-filing-for-new-ie--6ab5f31c/.book';
import Cover from '../../../../../../.claude/.conversations/claude--vat-registration-and-tax-filing-for-new-ie--6ab5f31c/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--vat-registration-and-tax-filing-for-new-ie--6ab5f31c/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--vat-registration-and-tax-filing-for-new-ie--6ab5f31c/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--vat-registration-and-tax-filing-for-new-ie--6ab5f31c/1-conversation';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {Conversation1()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
