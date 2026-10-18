import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--cliff-start--a6436d96/.book';
import Cover from '../../../../../../.claude/.conversations/claude--cliff-start--a6436d96/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--cliff-start--a6436d96/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--cliff-start--a6436d96/.table';
import April1020261 from '../../../../../../.claude/.conversations/claude--cliff-start--a6436d96/1-april-10-2026';
import April1220262 from '../../../../../../.claude/.conversations/claude--cliff-start--a6436d96/2-april-12-2026';
import April1320263 from '../../../../../../.claude/.conversations/claude--cliff-start--a6436d96/3-april-13-2026';
import April1620264 from '../../../../../../.claude/.conversations/claude--cliff-start--a6436d96/4-april-16-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {April1020261()}
        {April1220262()}
        {April1320263()}
        {April1620264()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
