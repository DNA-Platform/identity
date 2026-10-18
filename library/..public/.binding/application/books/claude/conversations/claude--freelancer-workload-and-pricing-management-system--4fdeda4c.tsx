import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--freelancer-workload-and-pricing-management-system--4fdeda4c/.book';
import Cover from '../../../../../../.claude/.conversations/claude--freelancer-workload-and-pricing-management-system--4fdeda4c/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--freelancer-workload-and-pricing-management-system--4fdeda4c/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--freelancer-workload-and-pricing-management-system--4fdeda4c/.table';
import November2420241 from '../../../../../../.claude/.conversations/claude--freelancer-workload-and-pricing-management-system--4fdeda4c/1-november-24-2024';
import November2520242 from '../../../../../../.claude/.conversations/claude--freelancer-workload-and-pricing-management-system--4fdeda4c/2-november-25-2024';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {November2420241()}
        {November2520242()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
