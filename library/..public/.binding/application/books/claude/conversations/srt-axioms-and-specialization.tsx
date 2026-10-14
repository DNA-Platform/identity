import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/srt-axioms-and-specialization/.book';
import Cover from '../../../../../../.claude/.conversations/srt-axioms-and-specialization/.cover';
import Synopsis from '../../../../../../.claude/.conversations/srt-axioms-and-specialization/.synopsis';
import Table from '../../../../../../.claude/.conversations/srt-axioms-and-specialization/.table';
import June620261 from '../../../../../../.claude/.conversations/srt-axioms-and-specialization/1-june-6-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June620261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
