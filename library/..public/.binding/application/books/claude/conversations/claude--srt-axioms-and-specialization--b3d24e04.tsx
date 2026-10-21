import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--srt-axioms-and-specialization--b3d24e04/.book';
import Cover from '../../../../../../.claude/.conversations/claude--srt-axioms-and-specialization--b3d24e04/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--srt-axioms-and-specialization--b3d24e04/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--srt-axioms-and-specialization--b3d24e04/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--srt-axioms-and-specialization--b3d24e04/1-conversation';

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
