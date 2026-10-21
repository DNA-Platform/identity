import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--things-to-do-at-mtatsminda-park--7b2dd883/.book';
import Cover from '../../../../../../.claude/.conversations/claude--things-to-do-at-mtatsminda-park--7b2dd883/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--things-to-do-at-mtatsminda-park--7b2dd883/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--things-to-do-at-mtatsminda-park--7b2dd883/.table';
import Conversation1 from '../../../../../../.claude/.conversations/claude--things-to-do-at-mtatsminda-park--7b2dd883/1-conversation';

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
