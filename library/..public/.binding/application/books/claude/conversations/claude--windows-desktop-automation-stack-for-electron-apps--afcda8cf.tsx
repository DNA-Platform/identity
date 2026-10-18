import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--windows-desktop-automation-stack-for-electron-apps--afcda8cf/.book';
import Cover from '../../../../../../.claude/.conversations/claude--windows-desktop-automation-stack-for-electron-apps--afcda8cf/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--windows-desktop-automation-stack-for-electron-apps--afcda8cf/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--windows-desktop-automation-stack-for-electron-apps--afcda8cf/.table';
import June1620261 from '../../../../../../.claude/.conversations/claude--windows-desktop-automation-stack-for-electron-apps--afcda8cf/1-june-16-2026';

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
