import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--telegram-censorship-and-surveillance-resistance-in-russia--61079543/.book';
import Cover from '../../../../../../.claude/.conversations/claude--telegram-censorship-and-surveillance-resistance-in-russia--61079543/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--telegram-censorship-and-surveillance-resistance-in-russia--61079543/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--telegram-censorship-and-surveillance-resistance-in-russia--61079543/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--telegram-censorship-and-surveillance-resistance-in-russia--61079543/1-conversation';

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
