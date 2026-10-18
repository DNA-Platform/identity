import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--connecting-to-msix-electron-app-via-connectovercdp--3bc9029a/.book';
import Cover from '../../../../../../.claude/.conversations/claude--connecting-to-msix-electron-app-via-connectovercdp--3bc9029a/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--connecting-to-msix-electron-app-via-connectovercdp--3bc9029a/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--connecting-to-msix-electron-app-via-connectovercdp--3bc9029a/.table';
import June1620261 from '../../../../../../.claude/.conversations/claude--connecting-to-msix-electron-app-via-connectovercdp--3bc9029a/1-june-16-2026';

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
