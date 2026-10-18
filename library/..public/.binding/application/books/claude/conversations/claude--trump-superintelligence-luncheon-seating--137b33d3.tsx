import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--trump-superintelligence-luncheon-seating--137b33d3/.book';
import Cover from '../../../../../../.claude/.conversations/claude--trump-superintelligence-luncheon-seating--137b33d3/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--trump-superintelligence-luncheon-seating--137b33d3/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--trump-superintelligence-luncheon-seating--137b33d3/.table';
import September2920261 from '../../../../../../.claude/.conversations/claude--trump-superintelligence-luncheon-seating--137b33d3/1-september-29-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {September2920261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
