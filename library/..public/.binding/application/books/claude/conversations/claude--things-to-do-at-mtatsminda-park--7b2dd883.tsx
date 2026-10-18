import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--things-to-do-at-mtatsminda-park--7b2dd883/.book';
import Cover from '../../../../../../.claude/.conversations/claude--things-to-do-at-mtatsminda-park--7b2dd883/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--things-to-do-at-mtatsminda-park--7b2dd883/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--things-to-do-at-mtatsminda-park--7b2dd883/.table';
import April1820261 from '../../../../../../.claude/.conversations/claude--things-to-do-at-mtatsminda-park--7b2dd883/1-april-18-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {April1820261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
