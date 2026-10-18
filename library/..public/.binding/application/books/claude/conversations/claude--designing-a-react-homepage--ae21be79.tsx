import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--designing-a-react-homepage--ae21be79/.book';
import Cover from '../../../../../../.claude/.conversations/claude--designing-a-react-homepage--ae21be79/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--designing-a-react-homepage--ae21be79/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--designing-a-react-homepage--ae21be79/.table';
import March3120251 from '../../../../../../.claude/.conversations/claude--designing-a-react-homepage--ae21be79/1-march-31-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {March3120251()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
