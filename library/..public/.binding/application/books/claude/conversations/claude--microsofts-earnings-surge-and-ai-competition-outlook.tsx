import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--microsofts-earnings-surge-and-ai-competition-outlook/.book';
import Cover from '../../../../../../.claude/.conversations/claude--microsofts-earnings-surge-and-ai-competition-outlook/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--microsofts-earnings-surge-and-ai-competition-outlook/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--microsofts-earnings-surge-and-ai-competition-outlook/.table';
import July3020261 from '../../../../../../.claude/.conversations/claude--microsofts-earnings-surge-and-ai-competition-outlook/1-july-30-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {July3020261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
