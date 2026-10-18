import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--untitled-23-june-2026--c207b4c8/.book';
import Cover from '../../../../../../.claude/.conversations/claude--untitled-23-june-2026--c207b4c8/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--untitled-23-june-2026--c207b4c8/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--untitled-23-june-2026--c207b4c8/.table';
import June2320261 from '../../../../../../.claude/.conversations/claude--untitled-23-june-2026--c207b4c8/1-june-23-2026';
import June2420262 from '../../../../../../.claude/.conversations/claude--untitled-23-june-2026--c207b4c8/2-june-24-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June2320261()}
        {June2420262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
