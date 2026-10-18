import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--understanding-boundaries-and-consequences--308f3d1b/.book';
import Cover from '../../../../../../.claude/.conversations/claude--understanding-boundaries-and-consequences--308f3d1b/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--understanding-boundaries-and-consequences--308f3d1b/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--understanding-boundaries-and-consequences--308f3d1b/.table';
import April1720261 from '../../../../../../.claude/.conversations/claude--understanding-boundaries-and-consequences--308f3d1b/1-april-17-2026';
import April1820262 from '../../../../../../.claude/.conversations/claude--understanding-boundaries-and-consequences--308f3d1b/2-april-18-2026';
import April1920263 from '../../../../../../.claude/.conversations/claude--understanding-boundaries-and-consequences--308f3d1b/3-april-19-2026';
import April2020264 from '../../../../../../.claude/.conversations/claude--understanding-boundaries-and-consequences--308f3d1b/4-april-20-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {April1720261()}
        {April1820262()}
        {April1920263()}
        {April2020264()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
