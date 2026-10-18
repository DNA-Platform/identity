import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--synthesizing-a-career-across-neuroscience-engineering-and-fi--f8a944f7/.book';
import Cover from '../../../../../../.claude/.conversations/claude--synthesizing-a-career-across-neuroscience-engineering-and-fi--f8a944f7/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--synthesizing-a-career-across-neuroscience-engineering-and-fi--f8a944f7/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--synthesizing-a-career-across-neuroscience-engineering-and-fi--f8a944f7/.table';
import February1720261 from '../../../../../../.claude/.conversations/claude--synthesizing-a-career-across-neuroscience-engineering-and-fi--f8a944f7/1-february-17-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {February1720261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
