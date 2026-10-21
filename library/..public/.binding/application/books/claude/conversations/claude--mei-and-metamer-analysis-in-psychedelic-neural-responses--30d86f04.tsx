import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--mei-and-metamer-analysis-in-psychedelic-neural-responses--30d86f04/.book';
import Cover from '../../../../../../.claude/.conversations/claude--mei-and-metamer-analysis-in-psychedelic-neural-responses--30d86f04/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--mei-and-metamer-analysis-in-psychedelic-neural-responses--30d86f04/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--mei-and-metamer-analysis-in-psychedelic-neural-responses--30d86f04/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--mei-and-metamer-analysis-in-psychedelic-neural-responses--30d86f04/1-conversation';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {Conversation1()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
