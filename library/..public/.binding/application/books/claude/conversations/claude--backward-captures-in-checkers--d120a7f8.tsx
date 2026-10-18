import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--backward-captures-in-checkers--d120a7f8/.book';
import Cover from '../../../../../../.claude/.conversations/claude--backward-captures-in-checkers--d120a7f8/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--backward-captures-in-checkers--d120a7f8/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--backward-captures-in-checkers--d120a7f8/.table';
import May1520261 from '../../../../../../.claude/.conversations/claude--backward-captures-in-checkers--d120a7f8/1-may-15-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {May1520261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
