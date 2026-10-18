import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--troubleshooting-vscode-extension-packaging--b6399323/.book';
import Cover from '../../../../../../.claude/.conversations/claude--troubleshooting-vscode-extension-packaging--b6399323/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--troubleshooting-vscode-extension-packaging--b6399323/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--troubleshooting-vscode-extension-packaging--b6399323/.table';
import February1820251 from '../../../../../../.claude/.conversations/claude--troubleshooting-vscode-extension-packaging--b6399323/1-february-18-2025';
import February1920252 from '../../../../../../.claude/.conversations/claude--troubleshooting-vscode-extension-packaging--b6399323/2-february-19-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {February1820251()}
        {February1920252()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
