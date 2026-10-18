import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--family-ocean-fishing-trips-in-batumi--bed6d2f9/.book';
import Cover from '../../../../../../.claude/.conversations/claude--family-ocean-fishing-trips-in-batumi--bed6d2f9/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--family-ocean-fishing-trips-in-batumi--bed6d2f9/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--family-ocean-fishing-trips-in-batumi--bed6d2f9/.table';
import August1520261 from '../../../../../../.claude/.conversations/claude--family-ocean-fishing-trips-in-batumi--bed6d2f9/1-august-15-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {August1520261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
