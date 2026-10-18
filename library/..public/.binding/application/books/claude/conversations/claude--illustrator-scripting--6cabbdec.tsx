import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--illustrator-scripting--6cabbdec/.book';
import Cover from '../../../../../../.claude/.conversations/claude--illustrator-scripting--6cabbdec/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--illustrator-scripting--6cabbdec/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--illustrator-scripting--6cabbdec/.table';
import November3020241 from '../../../../../../.claude/.conversations/claude--illustrator-scripting--6cabbdec/1-november-30-2024';
import December120242 from '../../../../../../.claude/.conversations/claude--illustrator-scripting--6cabbdec/2-december-1-2024';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {November3020241()}
        {December120242()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
