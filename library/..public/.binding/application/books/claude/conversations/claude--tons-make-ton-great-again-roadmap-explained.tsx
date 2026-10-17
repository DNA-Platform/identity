import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--tons-make-ton-great-again-roadmap-explained/.book';
import Cover from '../../../../../../.claude/.conversations/claude--tons-make-ton-great-again-roadmap-explained/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--tons-make-ton-great-again-roadmap-explained/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--tons-make-ton-great-again-roadmap-explained/.table';
import May520261 from '../../../../../../.claude/.conversations/claude--tons-make-ton-great-again-roadmap-explained/1-may-5-2026';
import May620262 from '../../../../../../.claude/.conversations/claude--tons-make-ton-great-again-roadmap-explained/2-may-6-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {May520261()}
        {May620262()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
