import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--sunny-kings-crypto-projects-and-anonymous-inventors--83a8ee17/.book';
import Cover from '../../../../../../.claude/.conversations/claude--sunny-kings-crypto-projects-and-anonymous-inventors--83a8ee17/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--sunny-kings-crypto-projects-and-anonymous-inventors--83a8ee17/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--sunny-kings-crypto-projects-and-anonymous-inventors--83a8ee17/.table';
import February420261 from '../../../../../../.claude/.conversations/claude--sunny-kings-crypto-projects-and-anonymous-inventors--83a8ee17/1-february-4-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {February420261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
