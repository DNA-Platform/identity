import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--escitalopram-receptor-occupancy-and-mdma-subjective-effects--bb1a660d/.book';
import Cover from '../../../../../../.claude/.conversations/claude--escitalopram-receptor-occupancy-and-mdma-subjective-effects--bb1a660d/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--escitalopram-receptor-occupancy-and-mdma-subjective-effects--bb1a660d/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--escitalopram-receptor-occupancy-and-mdma-subjective-effects--bb1a660d/.table';
import April220261 from '../../../../../../.claude/.conversations/claude--escitalopram-receptor-occupancy-and-mdma-subjective-effects--bb1a660d/1-april-2-2026';
import April320262 from '../../../../../../.claude/.conversations/claude--escitalopram-receptor-occupancy-and-mdma-subjective-effects--bb1a660d/2-april-3-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {April220261()}
        {April320262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
