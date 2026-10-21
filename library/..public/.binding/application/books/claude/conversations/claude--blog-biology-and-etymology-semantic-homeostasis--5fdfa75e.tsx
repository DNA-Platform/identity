import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--blog-biology-and-etymology-semantic-homeostasis--5fdfa75e/.book';
import Cover from '../../../../../../.claude/.conversations/claude--blog-biology-and-etymology-semantic-homeostasis--5fdfa75e/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--blog-biology-and-etymology-semantic-homeostasis--5fdfa75e/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--blog-biology-and-etymology-semantic-homeostasis--5fdfa75e/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--blog-biology-and-etymology-semantic-homeostasis--5fdfa75e/1-conversation';

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
