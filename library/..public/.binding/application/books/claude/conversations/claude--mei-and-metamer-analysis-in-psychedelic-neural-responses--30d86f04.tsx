import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--mei-and-metamer-analysis-in-psychedelic-neural-responses--30d86f04/.book';
import Cover from '../../../../../../.claude/.conversations/claude--mei-and-metamer-analysis-in-psychedelic-neural-responses--30d86f04/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--mei-and-metamer-analysis-in-psychedelic-neural-responses--30d86f04/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--mei-and-metamer-analysis-in-psychedelic-neural-responses--30d86f04/.table';
import July2720261 from '../../../../../../.claude/.conversations/claude--mei-and-metamer-analysis-in-psychedelic-neural-responses--30d86f04/1-july-27-2026';
import July2820262 from '../../../../../../.claude/.conversations/claude--mei-and-metamer-analysis-in-psychedelic-neural-responses--30d86f04/2-july-28-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {July2720261()}
        {July2820262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
