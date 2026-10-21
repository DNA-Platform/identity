import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--enabling-chrome-devtools-protocol-on-running-electron-msix-a--29c03f09/.book';
import Cover from '../../../../../../.claude/.conversations/claude--enabling-chrome-devtools-protocol-on-running-electron-msix-a--29c03f09/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--enabling-chrome-devtools-protocol-on-running-electron-msix-a--29c03f09/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--enabling-chrome-devtools-protocol-on-running-electron-msix-a--29c03f09/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--enabling-chrome-devtools-protocol-on-running-electron-msix-a--29c03f09/1-conversation';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {Conversation1()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
