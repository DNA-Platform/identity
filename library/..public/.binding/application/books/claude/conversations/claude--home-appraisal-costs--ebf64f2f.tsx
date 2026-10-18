import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--home-appraisal-costs--ebf64f2f/.book';
import Cover from '../../../../../../.claude/.conversations/claude--home-appraisal-costs--ebf64f2f/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--home-appraisal-costs--ebf64f2f/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--home-appraisal-costs--ebf64f2f/.table';
import November2620241 from '../../../../../../.claude/.conversations/claude--home-appraisal-costs--ebf64f2f/1-november-26-2024';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {November2620241()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
