import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--batch-script-to-list-folder-images--575fa73b/.book';
import Cover from '../../../../../../.claude/.conversations/claude--batch-script-to-list-folder-images--575fa73b/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--batch-script-to-list-folder-images--575fa73b/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--batch-script-to-list-folder-images--575fa73b/.table';
import December1620251 from '../../../../../../.claude/.conversations/claude--batch-script-to-list-folder-images--575fa73b/1-december-16-2025';
import December1720252 from '../../../../../../.claude/.conversations/claude--batch-script-to-list-folder-images--575fa73b/2-december-17-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {December1620251()}
        {December1720252()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
