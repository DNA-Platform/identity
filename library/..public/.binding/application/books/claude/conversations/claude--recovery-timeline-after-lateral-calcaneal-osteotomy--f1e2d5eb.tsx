import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--recovery-timeline-after-lateral-calcaneal-osteotomy--f1e2d5eb/.book';
import Cover from '../../../../../../.claude/.conversations/claude--recovery-timeline-after-lateral-calcaneal-osteotomy--f1e2d5eb/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--recovery-timeline-after-lateral-calcaneal-osteotomy--f1e2d5eb/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--recovery-timeline-after-lateral-calcaneal-osteotomy--f1e2d5eb/.table';
import July320261 from '../../../../../../.claude/.conversations/claude--recovery-timeline-after-lateral-calcaneal-osteotomy--f1e2d5eb/1-july-3-2026';
import July420262 from '../../../../../../.claude/.conversations/claude--recovery-timeline-after-lateral-calcaneal-osteotomy--f1e2d5eb/2-july-4-2026';
import July1720263 from '../../../../../../.claude/.conversations/claude--recovery-timeline-after-lateral-calcaneal-osteotomy--f1e2d5eb/3-july-17-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {July320261()}
        {July420262()}
        {July1720263()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
