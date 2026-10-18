import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--trump-and-the-epstein-files-mystery--122879af/.book';
import Cover from '../../../../../../.claude/.conversations/claude--trump-and-the-epstein-files-mystery--122879af/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--trump-and-the-epstein-files-mystery--122879af/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--trump-and-the-epstein-files-mystery--122879af/.table';
import April1320261 from '../../../../../../.claude/.conversations/claude--trump-and-the-epstein-files-mystery--122879af/1-april-13-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {April1320261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
