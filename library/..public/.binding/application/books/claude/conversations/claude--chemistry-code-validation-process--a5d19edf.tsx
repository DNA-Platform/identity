import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--chemistry-code-validation-process--a5d19edf/.book';
import Cover from '../../../../../../.claude/.conversations/claude--chemistry-code-validation-process--a5d19edf/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--chemistry-code-validation-process--a5d19edf/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--chemistry-code-validation-process--a5d19edf/.table';
import October1720251 from '../../../../../../.claude/.conversations/claude--chemistry-code-validation-process--a5d19edf/1-october-17-2025';
import October1820252 from '../../../../../../.claude/.conversations/claude--chemistry-code-validation-process--a5d19edf/2-october-18-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {October1720251()}
        {October1820252()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
