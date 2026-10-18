import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--write-it-in-a-new-editable-document--3762e1b9/.book';
import Cover from '../../../../../../.claude/.conversations/claude--write-it-in-a-new-editable-document--3762e1b9/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--write-it-in-a-new-editable-document--3762e1b9/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--write-it-in-a-new-editable-document--3762e1b9/.table';
import September1420251 from '../../../../../../.claude/.conversations/claude--write-it-in-a-new-editable-document--3762e1b9/1-september-14-2025';
import CompleteChemistryFrameworkV1o1 from '../../../../../../.claude/.conversations/claude--write-it-in-a-new-editable-document--3762e1b9/o1-complete-chemistry-framework-v1';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {September1420251()}
        {CompleteChemistryFrameworkV1o1()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
