import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--school-snack-sharing-and-potential-exclusion-concerns--e3678695/.book';
import Cover from '../../../../../../.claude/.conversations/claude--school-snack-sharing-and-potential-exclusion-concerns--e3678695/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--school-snack-sharing-and-potential-exclusion-concerns--e3678695/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--school-snack-sharing-and-potential-exclusion-concerns--e3678695/.table';
import March920261 from '../../../../../../.claude/.conversations/claude--school-snack-sharing-and-potential-exclusion-concerns--e3678695/1-march-9-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {March920261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
