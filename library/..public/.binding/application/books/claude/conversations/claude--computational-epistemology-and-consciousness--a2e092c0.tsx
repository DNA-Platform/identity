import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--computational-epistemology-and-consciousness--a2e092c0/.book';
import Cover from '../../../../../../.claude/.conversations/claude--computational-epistemology-and-consciousness--a2e092c0/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--computational-epistemology-and-consciousness--a2e092c0/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--computational-epistemology-and-consciousness--a2e092c0/.table';
import October1220261 from '../../../../../../.claude/.conversations/claude--computational-epistemology-and-consciousness--a2e092c0/1-october-12-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {October1220261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
