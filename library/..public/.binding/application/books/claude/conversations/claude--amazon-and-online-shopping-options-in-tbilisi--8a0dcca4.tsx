import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--amazon-and-online-shopping-options-in-tbilisi--8a0dcca4/.book';
import Cover from '../../../../../../.claude/.conversations/claude--amazon-and-online-shopping-options-in-tbilisi--8a0dcca4/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--amazon-and-online-shopping-options-in-tbilisi--8a0dcca4/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--amazon-and-online-shopping-options-in-tbilisi--8a0dcca4/.table';
import February1620261 from '../../../../../../.claude/.conversations/claude--amazon-and-online-shopping-options-in-tbilisi--8a0dcca4/1-february-16-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {February1620261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
