import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--look-up-mei-and-metamer-analysis--2fa8f692/.book';
import Cover from '../../../../../../.claude/.conversations/claude--look-up-mei-and-metamer-analysis--2fa8f692/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--look-up-mei-and-metamer-analysis--2fa8f692/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--look-up-mei-and-metamer-analysis--2fa8f692/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--look-up-mei-and-metamer-analysis--2fa8f692/1-conversation';

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
