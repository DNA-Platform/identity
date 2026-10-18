import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--conversational-russian-immersion-learning--cf8acad4/.book';
import Cover from '../../../../../../.claude/.conversations/claude--conversational-russian-immersion-learning--cf8acad4/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--conversational-russian-immersion-learning--cf8acad4/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--conversational-russian-immersion-learning--cf8acad4/.table';
import March620261 from '../../../../../../.claude/.conversations/claude--conversational-russian-immersion-learning--cf8acad4/1-march-6-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {March620261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
