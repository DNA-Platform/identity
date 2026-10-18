import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--selling-prints-on-spoonflower--50870707/.book';
import Cover from '../../../../../../.claude/.conversations/claude--selling-prints-on-spoonflower--50870707/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--selling-prints-on-spoonflower--50870707/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--selling-prints-on-spoonflower--50870707/.table';
import March2520261 from '../../../../../../.claude/.conversations/claude--selling-prints-on-spoonflower--50870707/1-march-25-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {March2520261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
