import { $ } from '@dna-platform/chemistry';
import { opened } from '../opened';
import $Book from '../../../../.claude/.book';
import Cover from '../../../../.claude/.cover';
import Synopsis from '../../../../.claude/.synopsis';
import Table from '../../../../.claude/.table';
import OurConversations1 from '../../../../.claude/1-our-conversations';
import SemanticReferenceTheory2 from '../../../../.claude/2-semantic-reference-theory';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {OurConversations1()}
        {SemanticReferenceTheory2()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
