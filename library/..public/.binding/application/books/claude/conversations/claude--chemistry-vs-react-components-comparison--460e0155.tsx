import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--chemistry-vs-react-components-comparison--460e0155/.book';
import Cover from '../../../../../../.claude/.conversations/claude--chemistry-vs-react-components-comparison--460e0155/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--chemistry-vs-react-components-comparison--460e0155/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--chemistry-vs-react-components-comparison--460e0155/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--chemistry-vs-react-components-comparison--460e0155/1-conversation';

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
