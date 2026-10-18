import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--finding-apartments-in-tbilisi-near-a-school--74f6f1ee/.book';
import Cover from '../../../../../../.claude/.conversations/claude--finding-apartments-in-tbilisi-near-a-school--74f6f1ee/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--finding-apartments-in-tbilisi-near-a-school--74f6f1ee/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--finding-apartments-in-tbilisi-near-a-school--74f6f1ee/.table';
import January2620261 from '../../../../../../.claude/.conversations/claude--finding-apartments-in-tbilisi-near-a-school--74f6f1ee/1-january-26-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January2620261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
