import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--academic-credentials-and-research-impact-assessment--c2aadd58/.book';
import Cover from '../../../../../../.claude/.conversations/claude--academic-credentials-and-research-impact-assessment--c2aadd58/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--academic-credentials-and-research-impact-assessment--c2aadd58/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--academic-credentials-and-research-impact-assessment--c2aadd58/.table';
import May1220261 from '../../../../../../.claude/.conversations/claude--academic-credentials-and-research-impact-assessment--c2aadd58/1-may-12-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {May1220261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
