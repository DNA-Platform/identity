import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--deposit-insurance-coverage-update--f34f433f/.book';
import Cover from '../../../../../../.claude/.conversations/claude--deposit-insurance-coverage-update--f34f433f/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--deposit-insurance-coverage-update--f34f433f/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--deposit-insurance-coverage-update--f34f433f/.table';
import April120261 from '../../../../../../.claude/.conversations/claude--deposit-insurance-coverage-update--f34f433f/1-april-1-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {April120261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
