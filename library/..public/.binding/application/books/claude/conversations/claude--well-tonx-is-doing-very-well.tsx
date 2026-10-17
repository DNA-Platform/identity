import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--well-tonx-is-doing-very-well/.book';
import Cover from '../../../../../../.claude/.conversations/claude--well-tonx-is-doing-very-well/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--well-tonx-is-doing-very-well/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--well-tonx-is-doing-very-well/.table';
import March2120261 from '../../../../../../.claude/.conversations/claude--well-tonx-is-doing-very-well/1-march-21-2026';
import March2220262 from '../../../../../../.claude/.conversations/claude--well-tonx-is-doing-very-well/2-march-22-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {March2120261()}
        {March2220262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
