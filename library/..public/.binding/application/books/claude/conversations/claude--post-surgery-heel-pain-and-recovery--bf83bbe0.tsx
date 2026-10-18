import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--post-surgery-heel-pain-and-recovery--bf83bbe0/.book';
import Cover from '../../../../../../.claude/.conversations/claude--post-surgery-heel-pain-and-recovery--bf83bbe0/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--post-surgery-heel-pain-and-recovery--bf83bbe0/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--post-surgery-heel-pain-and-recovery--bf83bbe0/.table';
import October320261 from '../../../../../../.claude/.conversations/claude--post-surgery-heel-pain-and-recovery--bf83bbe0/1-october-3-2026';
import October620262 from '../../../../../../.claude/.conversations/claude--post-surgery-heel-pain-and-recovery--bf83bbe0/2-october-6-2026';
import October1020263 from '../../../../../../.claude/.conversations/claude--post-surgery-heel-pain-and-recovery--bf83bbe0/3-october-10-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {October320261()}
        {October620262()}
        {October1020263()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
