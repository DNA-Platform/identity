import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--playwright-support-for-electron-apps-in-2026--bc4b49a3/.book';
import Cover from '../../../../../../.claude/.conversations/claude--playwright-support-for-electron-apps-in-2026--bc4b49a3/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--playwright-support-for-electron-apps-in-2026--bc4b49a3/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--playwright-support-for-electron-apps-in-2026--bc4b49a3/.table';
import June1620261 from '../../../../../../.claude/.conversations/claude--playwright-support-for-electron-apps-in-2026--bc4b49a3/1-june-16-2026';

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
