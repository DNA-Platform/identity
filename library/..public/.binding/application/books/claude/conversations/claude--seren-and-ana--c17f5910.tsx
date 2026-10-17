import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--seren-and-ana--c17f5910/.book';
import Cover from '../../../../../../.claude/.conversations/claude--seren-and-ana--c17f5910/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--seren-and-ana--c17f5910/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--seren-and-ana--c17f5910/.table';
import December1020251 from '../../../../../../.claude/.conversations/claude--seren-and-ana--c17f5910/1-december-10-2025';
import December1120252 from '../../../../../../.claude/.conversations/claude--seren-and-ana--c17f5910/2-december-11-2025';
import December1220253 from '../../../../../../.claude/.conversations/claude--seren-and-ana--c17f5910/3-december-12-2025';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {December1020251()}
        {December1120252()}
        {December1220253()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
