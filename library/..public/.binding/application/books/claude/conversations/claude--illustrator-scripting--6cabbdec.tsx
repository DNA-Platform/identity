import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--illustrator-scripting--6cabbdec/.book';
import Cover from '../../../../../../.claude/.conversations/claude--illustrator-scripting--6cabbdec/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--illustrator-scripting--6cabbdec/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--illustrator-scripting--6cabbdec/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--illustrator-scripting--6cabbdec/1-conversation';

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
