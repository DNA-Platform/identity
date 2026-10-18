import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--normal-body-temperature-and-fever-thresholds-in-children--0f928900/.book';
import Cover from '../../../../../../.claude/.conversations/claude--normal-body-temperature-and-fever-thresholds-in-children--0f928900/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--normal-body-temperature-and-fever-thresholds-in-children--0f928900/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--normal-body-temperature-and-fever-thresholds-in-children--0f928900/.table';
import February2620261 from '../../../../../../.claude/.conversations/claude--normal-body-temperature-and-fever-thresholds-in-children--0f928900/1-february-26-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {February2620261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
