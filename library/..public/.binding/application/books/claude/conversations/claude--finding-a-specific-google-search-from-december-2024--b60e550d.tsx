import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--finding-a-specific-google-search-from-december-2024--b60e550d/.book';
import Cover from '../../../../../../.claude/.conversations/claude--finding-a-specific-google-search-from-december-2024--b60e550d/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--finding-a-specific-google-search-from-december-2024--b60e550d/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--finding-a-specific-google-search-from-december-2024--b60e550d/.table';
import January2120261 from '../../../../../../.claude/.conversations/claude--finding-a-specific-google-search-from-december-2024--b60e550d/1-january-21-2026';

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
