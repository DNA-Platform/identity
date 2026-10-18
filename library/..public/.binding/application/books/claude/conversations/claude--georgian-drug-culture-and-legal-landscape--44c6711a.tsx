import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--georgian-drug-culture-and-legal-landscape--44c6711a/.book';
import Cover from '../../../../../../.claude/.conversations/claude--georgian-drug-culture-and-legal-landscape--44c6711a/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--georgian-drug-culture-and-legal-landscape--44c6711a/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--georgian-drug-culture-and-legal-landscape--44c6711a/.table';
import April2020261 from '../../../../../../.claude/.conversations/claude--georgian-drug-culture-and-legal-landscape--44c6711a/1-april-20-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {April2020261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
