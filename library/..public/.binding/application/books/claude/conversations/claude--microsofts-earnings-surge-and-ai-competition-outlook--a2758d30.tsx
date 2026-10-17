import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--microsofts-earnings-surge-and-ai-competition-outlook--a2758d30/.book';
import Cover from '../../../../../../.claude/.conversations/claude--microsofts-earnings-surge-and-ai-competition-outlook--a2758d30/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--microsofts-earnings-surge-and-ai-competition-outlook--a2758d30/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--microsofts-earnings-surge-and-ai-competition-outlook--a2758d30/.table';
import July3020261 from '../../../../../../.claude/.conversations/claude--microsofts-earnings-surge-and-ai-competition-outlook--a2758d30/1-july-30-2026';

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
