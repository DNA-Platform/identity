import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--russian-custody-case-with-travel-ban-and-safety-concerns--15312465/.book';
import Cover from '../../../../../../.claude/.conversations/claude--russian-custody-case-with-travel-ban-and-safety-concerns--15312465/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--russian-custody-case-with-travel-ban-and-safety-concerns--15312465/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--russian-custody-case-with-travel-ban-and-safety-concerns--15312465/.table';
import January2320261 from '../../../../../../.claude/.conversations/claude--russian-custody-case-with-travel-ban-and-safety-concerns--15312465/1-january-23-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January2320261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
