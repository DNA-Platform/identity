import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--illustrator-scripting--08ef93ab/.book';
import Cover from '../../../../../../.claude/.conversations/claude--illustrator-scripting--08ef93ab/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--illustrator-scripting--08ef93ab/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--illustrator-scripting--08ef93ab/.table';
import November2120241 from '../../../../../../.claude/.conversations/claude--illustrator-scripting--08ef93ab/1-november-21-2024';
import November2220242 from '../../../../../../.claude/.conversations/claude--illustrator-scripting--08ef93ab/2-november-22-2024';
import November2320243 from '../../../../../../.claude/.conversations/claude--illustrator-scripting--08ef93ab/3-november-23-2024';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {November2120241()}
        {November2220242()}
        {November2320243()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
