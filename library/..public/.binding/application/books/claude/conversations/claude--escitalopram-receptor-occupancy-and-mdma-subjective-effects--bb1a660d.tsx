import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--escitalopram-receptor-occupancy-and-mdma-subjective-effects--bb1a660d/.book';
import Cover from '../../../../../../.claude/.conversations/claude--escitalopram-receptor-occupancy-and-mdma-subjective-effects--bb1a660d/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--escitalopram-receptor-occupancy-and-mdma-subjective-effects--bb1a660d/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--escitalopram-receptor-occupancy-and-mdma-subjective-effects--bb1a660d/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--escitalopram-receptor-occupancy-and-mdma-subjective-effects--bb1a660d/1-conversation';

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
