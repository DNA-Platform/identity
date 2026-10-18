import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--ana-grid-ii--c4358792/.book';
import Cover from '../../../../../../.claude/.conversations/claude--ana-grid-ii--c4358792/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--ana-grid-ii--c4358792/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--ana-grid-ii--c4358792/.table';
import March1720261 from '../../../../../../.claude/.conversations/claude--ana-grid-ii--c4358792/1-march-17-2026';
import March1820262 from '../../../../../../.claude/.conversations/claude--ana-grid-ii--c4358792/2-march-18-2026';
import March2320263 from '../../../../../../.claude/.conversations/claude--ana-grid-ii--c4358792/3-march-23-2026';
import March2420264 from '../../../../../../.claude/.conversations/claude--ana-grid-ii--c4358792/4-march-24-2026';
import March3020265 from '../../../../../../.claude/.conversations/claude--ana-grid-ii--c4358792/5-march-30-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {March1720261()}
        {March1820262()}
        {March2320263()}
        {March2420264()}
        {March3020265()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
