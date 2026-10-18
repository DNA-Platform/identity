import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--green-card-options-for-russian-spouse-and-stepchildren--0d99232e/.book';
import Cover from '../../../../../../.claude/.conversations/claude--green-card-options-for-russian-spouse-and-stepchildren--0d99232e/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--green-card-options-for-russian-spouse-and-stepchildren--0d99232e/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--green-card-options-for-russian-spouse-and-stepchildren--0d99232e/.table';
import September1920261 from '../../../../../../.claude/.conversations/claude--green-card-options-for-russian-spouse-and-stepchildren--0d99232e/1-september-19-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {September1920261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
