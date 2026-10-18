import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--trump-rubio-and-venezuela-reconciling-perspectives--53f5d105/.book';
import Cover from '../../../../../../.claude/.conversations/claude--trump-rubio-and-venezuela-reconciling-perspectives--53f5d105/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--trump-rubio-and-venezuela-reconciling-perspectives--53f5d105/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--trump-rubio-and-venezuela-reconciling-perspectives--53f5d105/.table';
import January2120261 from '../../../../../../.claude/.conversations/claude--trump-rubio-and-venezuela-reconciling-perspectives--53f5d105/1-january-21-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {January2120261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
