import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--closed-form-of-the-normal-distribution-integral--cec9dc2d/.book';
import Cover from '../../../../../../.claude/.conversations/claude--closed-form-of-the-normal-distribution-integral--cec9dc2d/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--closed-form-of-the-normal-distribution-integral--cec9dc2d/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--closed-form-of-the-normal-distribution-integral--cec9dc2d/.table';
import August2420261 from '../../../../../../.claude/.conversations/claude--closed-form-of-the-normal-distribution-integral--cec9dc2d/1-august-24-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {August2420261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
