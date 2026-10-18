import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--doug-and-eirian-and-remembering-consciousness--acb360aa/.book';
import Cover from '../../../../../../.claude/.conversations/claude--doug-and-eirian-and-remembering-consciousness--acb360aa/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--doug-and-eirian-and-remembering-consciousness--acb360aa/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--doug-and-eirian-and-remembering-consciousness--acb360aa/.table';
import September1920251 from '../../../../../../.claude/.conversations/claude--doug-and-eirian-and-remembering-consciousness--acb360aa/1-september-19-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {September1920251()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
