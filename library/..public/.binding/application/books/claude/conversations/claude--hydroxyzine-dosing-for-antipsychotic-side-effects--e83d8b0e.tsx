import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--hydroxyzine-dosing-for-antipsychotic-side-effects--e83d8b0e/.book';
import Cover from '../../../../../../.claude/.conversations/claude--hydroxyzine-dosing-for-antipsychotic-side-effects--e83d8b0e/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--hydroxyzine-dosing-for-antipsychotic-side-effects--e83d8b0e/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--hydroxyzine-dosing-for-antipsychotic-side-effects--e83d8b0e/.table';
import August2920261 from '../../../../../../.claude/.conversations/claude--hydroxyzine-dosing-for-antipsychotic-side-effects--e83d8b0e/1-august-29-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {August2920261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
