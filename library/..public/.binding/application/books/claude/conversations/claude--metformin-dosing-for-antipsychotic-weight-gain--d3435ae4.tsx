import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--metformin-dosing-for-antipsychotic-weight-gain--d3435ae4/.book';
import Cover from '../../../../../../.claude/.conversations/claude--metformin-dosing-for-antipsychotic-weight-gain--d3435ae4/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--metformin-dosing-for-antipsychotic-weight-gain--d3435ae4/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--metformin-dosing-for-antipsychotic-weight-gain--d3435ae4/.table';
import August1720261 from '../../../../../../.claude/.conversations/claude--metformin-dosing-for-antipsychotic-weight-gain--d3435ae4/1-august-17-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {August1720261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
