import { $ } from '@dna-platform/chemistry';
import { opened } from '../opened';
import $Book from '../../../../.claude/.book';
import Cover from '../../../../.claude/.cover';
import Synopsis from '../../../../.claude/.synopsis';
import Table from '../../../../.claude/.table';
import OurConversations1 from '../../../../.claude/1-our-conversations';
import SemanticReferenceTheory2 from '../../../../.claude/2-semantic-reference-theory';
import ClaudesReferenceManual3 from '../../../../.claude/3-claudes-reference-manual';
import ClaudesDesign4 from '../../../../.claude/4-claudes-design';
import TheAccountso1 from '../../../../.claude/o1-the-accounts';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {OurConversations1()}
        {SemanticReferenceTheory2()}
        {ClaudesReferenceManual3()}
        {ClaudesDesign4()}
        {TheAccountso1()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
