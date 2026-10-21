import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--designing-a-react-homepage--ae21be79/.book';
import Cover from '../../../../../../.claude/.conversations/claude--designing-a-react-homepage--ae21be79/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--designing-a-react-homepage--ae21be79/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--designing-a-react-homepage--ae21be79/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--designing-a-react-homepage--ae21be79/1-conversation';

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
