import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--visa-requirements-for-americans-in-indonesia-and-malaysia--74b415d8/.book';
import Cover from '../../../../../../.claude/.conversations/claude--visa-requirements-for-americans-in-indonesia-and-malaysia--74b415d8/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--visa-requirements-for-americans-in-indonesia-and-malaysia--74b415d8/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--visa-requirements-for-americans-in-indonesia-and-malaysia--74b415d8/.table';
import September920261 from '../../../../../../.claude/.conversations/claude--visa-requirements-for-americans-in-indonesia-and-malaysia--74b415d8/1-september-9-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {September920261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
