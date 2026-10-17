import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--telegram-censorship-and-surveillance-resistance-in-russia--61079543/.book';
import Cover from '../../../../../../.claude/.conversations/claude--telegram-censorship-and-surveillance-resistance-in-russia--61079543/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--telegram-censorship-and-surveillance-resistance-in-russia--61079543/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--telegram-censorship-and-surveillance-resistance-in-russia--61079543/.table';
import March2320261 from '../../../../../../.claude/.conversations/claude--telegram-censorship-and-surveillance-resistance-in-russia--61079543/1-march-23-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {March2320261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
