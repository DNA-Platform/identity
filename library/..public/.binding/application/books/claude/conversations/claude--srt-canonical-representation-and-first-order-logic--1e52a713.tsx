import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--srt-canonical-representation-and-first-order-logic--1e52a713/.book';
import Cover from '../../../../../../.claude/.conversations/claude--srt-canonical-representation-and-first-order-logic--1e52a713/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--srt-canonical-representation-and-first-order-logic--1e52a713/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--srt-canonical-representation-and-first-order-logic--1e52a713/.table';
import April2720261 from '../../../../../../.claude/.conversations/claude--srt-canonical-representation-and-first-order-logic--1e52a713/1-april-27-2026';
import April2920262 from '../../../../../../.claude/.conversations/claude--srt-canonical-representation-and-first-order-logic--1e52a713/2-april-29-2026';
import April3020263 from '../../../../../../.claude/.conversations/claude--srt-canonical-representation-and-first-order-logic--1e52a713/3-april-30-2026';
import May120264 from '../../../../../../.claude/.conversations/claude--srt-canonical-representation-and-first-order-logic--1e52a713/4-may-1-2026';
import May620265 from '../../../../../../.claude/.conversations/claude--srt-canonical-representation-and-first-order-logic--1e52a713/5-may-6-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {April2720261()}
        {April2920262()}
        {April3020263()}
        {May120264()}
        {May620265()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
