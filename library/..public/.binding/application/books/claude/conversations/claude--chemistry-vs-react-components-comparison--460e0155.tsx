import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--chemistry-vs-react-components-comparison--460e0155/.book';
import Cover from '../../../../../../.claude/.conversations/claude--chemistry-vs-react-components-comparison--460e0155/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--chemistry-vs-react-components-comparison--460e0155/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--chemistry-vs-react-components-comparison--460e0155/.table';
import October3120251 from '../../../../../../.claude/.conversations/claude--chemistry-vs-react-components-comparison--460e0155/1-october-31-2025';
import November120252 from '../../../../../../.claude/.conversations/claude--chemistry-vs-react-components-comparison--460e0155/2-november-1-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {October3120251()}
        {November120252()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
