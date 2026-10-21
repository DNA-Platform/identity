import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-6-april-2025--5357bdbc/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-6-april-2025--5357bdbc/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-6-april-2025--5357bdbc/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-6-april-2025--5357bdbc/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--untitled-6-april-2025--5357bdbc/1-conversation';

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
