import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--georgia-ie-residency-income-threshold--7f89c8d2/.book';
import Cover from '../../../../../../.claude/.conversations/claude--georgia-ie-residency-income-threshold--7f89c8d2/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--georgia-ie-residency-income-threshold--7f89c8d2/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--georgia-ie-residency-income-threshold--7f89c8d2/.table';
import June420261 from '../../../../../../.claude/.conversations/claude--georgia-ie-residency-income-threshold--7f89c8d2/1-june-4-2026';
import June1520262 from '../../../../../../.claude/.conversations/claude--georgia-ie-residency-income-threshold--7f89c8d2/2-june-15-2026';
import July620263 from '../../../../../../.claude/.conversations/claude--georgia-ie-residency-income-threshold--7f89c8d2/3-july-6-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June420261()}
        {June1520262()}
        {July620263()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
