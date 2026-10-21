import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--windows-desktop-automation-stack-for-electron-apps--afcda8cf/.book';
import Cover from '../../../../../../.claude/.conversations/claude--windows-desktop-automation-stack-for-electron-apps--afcda8cf/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--windows-desktop-automation-stack-for-electron-apps--afcda8cf/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--windows-desktop-automation-stack-for-electron-apps--afcda8cf/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--windows-desktop-automation-stack-for-electron-apps--afcda8cf/1-conversation';

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
