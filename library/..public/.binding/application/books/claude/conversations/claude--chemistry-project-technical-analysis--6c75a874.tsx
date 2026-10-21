import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--chemistry-project-technical-analysis--6c75a874/.book';
import Cover from '../../../../../../.claude/.conversations/claude--chemistry-project-technical-analysis--6c75a874/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--chemistry-project-technical-analysis--6c75a874/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--chemistry-project-technical-analysis--6c75a874/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--chemistry-project-technical-analysis--6c75a874/1-conversation';
import FixedBondorchestratorChildrenBondFirstV1o1 from '../../../../../../.claude/.conversations/claude--chemistry-project-technical-analysis--6c75a874/o1-fixed-bondorchestrator-children-bond-first-v1';
import CatalogueBookChapterTestV1o2 from '../../../../../../.claude/.conversations/claude--chemistry-project-technical-analysis--6c75a874/o2-catalogue-book-chapter-test-v1';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {Conversation1()}
        {FixedBondorchestratorChildrenBondFirstV1o1()}
        {CatalogueBookChapterTestV1o2()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
