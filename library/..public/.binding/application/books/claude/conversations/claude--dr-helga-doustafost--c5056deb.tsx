import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--dr-helga-doustafost--c5056deb/.book';
import Cover from '../../../../../../.claude/.conversations/claude--dr-helga-doustafost--c5056deb/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--dr-helga-doustafost--c5056deb/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--dr-helga-doustafost--c5056deb/.table';
import February520261 from '../../../../../../.claude/.conversations/claude--dr-helga-doustafost--c5056deb/1-february-5-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {February520261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
