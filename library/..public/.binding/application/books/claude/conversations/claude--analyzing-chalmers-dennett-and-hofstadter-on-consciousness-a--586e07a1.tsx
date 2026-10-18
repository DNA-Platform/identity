import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--analyzing-chalmers-dennett-and-hofstadter-on-consciousness-a--586e07a1/.book';
import Cover from '../../../../../../.claude/.conversations/claude--analyzing-chalmers-dennett-and-hofstadter-on-consciousness-a--586e07a1/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--analyzing-chalmers-dennett-and-hofstadter-on-consciousness-a--586e07a1/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--analyzing-chalmers-dennett-and-hofstadter-on-consciousness-a--586e07a1/.table';
import May2720261 from '../../../../../../.claude/.conversations/claude--analyzing-chalmers-dennett-and-hofstadter-on-consciousness-a--586e07a1/1-may-27-2026';
import May2820262 from '../../../../../../.claude/.conversations/claude--analyzing-chalmers-dennett-and-hofstadter-on-consciousness-a--586e07a1/2-may-28-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {May2720261()}
        {May2820262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
