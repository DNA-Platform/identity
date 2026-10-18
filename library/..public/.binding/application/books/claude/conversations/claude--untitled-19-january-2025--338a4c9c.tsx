import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-19-january-2025--338a4c9c/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-19-january-2025--338a4c9c/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-19-january-2025--338a4c9c/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-19-january-2025--338a4c9c/.table';
import January1920251 from '../../../../../../.claude/.conversations/claude--untitled-19-january-2025--338a4c9c/1-january-19-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January1920251()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
