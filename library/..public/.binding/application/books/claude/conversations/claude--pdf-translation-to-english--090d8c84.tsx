import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--pdf-translation-to-english--090d8c84/.book';
import Cover from '../../../../../../.claude/.conversations/claude--pdf-translation-to-english--090d8c84/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--pdf-translation-to-english--090d8c84/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--pdf-translation-to-english--090d8c84/.table';
import February420261 from '../../../../../../.claude/.conversations/claude--pdf-translation-to-english--090d8c84/1-february-4-2026';
import February520262 from '../../../../../../.claude/.conversations/claude--pdf-translation-to-english--090d8c84/2-february-5-2026';
import February620263 from '../../../../../../.claude/.conversations/claude--pdf-translation-to-english--090d8c84/3-february-6-2026';
import February920264 from '../../../../../../.claude/.conversations/claude--pdf-translation-to-english--090d8c84/4-february-9-2026';
import February1220265 from '../../../../../../.claude/.conversations/claude--pdf-translation-to-english--090d8c84/5-february-12-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {February420261()}
        {February520262()}
        {February620263()}
        {February920264()}
        {February1220265()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
