import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--banach-tarski-and-the-axiom-of-choice--a2285675/.book';
import Cover from '../../../../../../.claude/.conversations/claude--banach-tarski-and-the-axiom-of-choice--a2285675/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--banach-tarski-and-the-axiom-of-choice--a2285675/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--banach-tarski-and-the-axiom-of-choice--a2285675/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--banach-tarski-and-the-axiom-of-choice--a2285675/1-conversation';

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
