import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--write-it-in-a-new-editable-document--3762e1b9/.book';
import Cover from '../../../../../../.claude/.conversations/claude--write-it-in-a-new-editable-document--3762e1b9/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--write-it-in-a-new-editable-document--3762e1b9/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--write-it-in-a-new-editable-document--3762e1b9/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--write-it-in-a-new-editable-document--3762e1b9/1-conversation';
import CompleteChemistryFrameworkV1o1 from '../../../../../../.claude/.conversations/claude--write-it-in-a-new-editable-document--3762e1b9/o1-complete-chemistry-framework-v1';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {Conversation1()}
        {CompleteChemistryFrameworkV1o1()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
