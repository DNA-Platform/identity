import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-6-april-2025--5357bdbc/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-6-april-2025--5357bdbc/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-6-april-2025--5357bdbc/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-6-april-2025--5357bdbc/.table';
import April620251 from '../../../../../../.claude/.conversations/claude--untitled-6-april-2025--5357bdbc/1-april-6-2025';
import April720252 from '../../../../../../.claude/.conversations/claude--untitled-6-april-2025--5357bdbc/2-april-7-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {April620251()}
        {April720252()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
