import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--ontology-and-referential-relationships--e37be5d4/.book';
import Cover from '../../../../../../.claude/.conversations/claude--ontology-and-referential-relationships--e37be5d4/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--ontology-and-referential-relationships--e37be5d4/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--ontology-and-referential-relationships--e37be5d4/.table';
import April2320261 from '../../../../../../.claude/.conversations/claude--ontology-and-referential-relationships--e37be5d4/1-april-23-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {April2320261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
