import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--specifying-srt--1d0ed292/.book';
import Cover from '../../../../../../.claude/.conversations/claude--specifying-srt--1d0ed292/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--specifying-srt--1d0ed292/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--specifying-srt--1d0ed292/.table';
import June1820261 from '../../../../../../.claude/.conversations/claude--specifying-srt--1d0ed292/1-june-18-2026';
import June2120262 from '../../../../../../.claude/.conversations/claude--specifying-srt--1d0ed292/2-june-21-2026';
import June2220263 from '../../../../../../.claude/.conversations/claude--specifying-srt--1d0ed292/3-june-22-2026';
import June2420264 from '../../../../../../.claude/.conversations/claude--specifying-srt--1d0ed292/4-june-24-2026';
import June2520265 from '../../../../../../.claude/.conversations/claude--specifying-srt--1d0ed292/5-june-25-2026';
import June2620266 from '../../../../../../.claude/.conversations/claude--specifying-srt--1d0ed292/6-june-26-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June1820261()}
        {June2120262()}
        {June2220263()}
        {June2420264()}
        {June2520265()}
        {June2620266()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
