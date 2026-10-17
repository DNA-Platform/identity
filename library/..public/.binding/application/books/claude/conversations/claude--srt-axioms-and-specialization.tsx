import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--srt-axioms-and-specialization/.book';
import Cover from '../../../../../../.claude/.conversations/claude--srt-axioms-and-specialization/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--srt-axioms-and-specialization/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--srt-axioms-and-specialization/.table';
import June620261 from '../../../../../../.claude/.conversations/claude--srt-axioms-and-specialization/1-june-6-2026';
import June720262 from '../../../../../../.claude/.conversations/claude--srt-axioms-and-specialization/2-june-7-2026';
import June920263 from '../../../../../../.claude/.conversations/claude--srt-axioms-and-specialization/3-june-9-2026';
import June1020264 from '../../../../../../.claude/.conversations/claude--srt-axioms-and-specialization/4-june-10-2026';
import June1320265 from '../../../../../../.claude/.conversations/claude--srt-axioms-and-specialization/5-june-13-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June620261()}
        {June720262()}
        {June920263()}
        {June1020264()}
        {June1320265()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
