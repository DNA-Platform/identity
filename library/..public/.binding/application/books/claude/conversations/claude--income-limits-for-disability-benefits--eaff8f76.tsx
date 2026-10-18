import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--income-limits-for-disability-benefits--eaff8f76/.book';
import Cover from '../../../../../../.claude/.conversations/claude--income-limits-for-disability-benefits--eaff8f76/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--income-limits-for-disability-benefits--eaff8f76/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--income-limits-for-disability-benefits--eaff8f76/.table';
import November120241 from '../../../../../../.claude/.conversations/claude--income-limits-for-disability-benefits--eaff8f76/1-november-1-2024';
import November220242 from '../../../../../../.claude/.conversations/claude--income-limits-for-disability-benefits--eaff8f76/2-november-2-2024';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {November120241()}
        {November220242()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
