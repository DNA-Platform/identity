import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--chemistry-framework-parameter-validation--48bf64ee/.book';
import Cover from '../../../../../../.claude/.conversations/claude--chemistry-framework-parameter-validation--48bf64ee/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--chemistry-framework-parameter-validation--48bf64ee/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--chemistry-framework-parameter-validation--48bf64ee/.table';
import October2020251 from '../../../../../../.claude/.conversations/claude--chemistry-framework-parameter-validation--48bf64ee/1-october-20-2025';
import ChemistryFrameworkDebugFixV1o1 from '../../../../../../.claude/.conversations/claude--chemistry-framework-parameter-validation--48bf64ee/o1-chemistry-framework-debug-fix-v1';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {October2020251()}
        {ChemistryFrameworkDebugFixV1o1()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
