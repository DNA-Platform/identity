import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--reconnecting-with-jake-on-hallucinogen-research-opportunity--3c581089/.book';
import Cover from '../../../../../../.claude/.conversations/claude--reconnecting-with-jake-on-hallucinogen-research-opportunity--3c581089/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--reconnecting-with-jake-on-hallucinogen-research-opportunity--3c581089/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--reconnecting-with-jake-on-hallucinogen-research-opportunity--3c581089/.table';
import June1620261 from '../../../../../../.claude/.conversations/claude--reconnecting-with-jake-on-hallucinogen-research-opportunity--3c581089/1-june-16-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June1620261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
