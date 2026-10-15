import { $ } from '@dna-platform/chemistry';
import { opened } from '../../opened';
import $Book from '../../../../../.claude/.design/.book';
import Cover from '../../../../../.claude/.design/.cover';
import Synopsis from '../../../../../.claude/.design/.synopsis';
import Table from '../../../../../.claude/.design/.table';
import StartingFromTheAudit1 from '../../../../../.claude/.design/1-starting-from-the-audit';
import EveryConcept2 from '../../../../../.claude/.design/2-every-concept';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {StartingFromTheAudit1()}
        {EveryConcept2()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
