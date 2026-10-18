import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--metformin-xr-dosing-and-maximum-dose--3c33fd09/.book';
import Cover from '../../../../../../.claude/.conversations/claude--metformin-xr-dosing-and-maximum-dose--3c33fd09/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--metformin-xr-dosing-and-maximum-dose--3c33fd09/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--metformin-xr-dosing-and-maximum-dose--3c33fd09/.table';
import August2020261 from '../../../../../../.claude/.conversations/claude--metformin-xr-dosing-and-maximum-dose--3c33fd09/1-august-20-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {August2020261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
