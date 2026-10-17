import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--library-semantics-in-srt--fbc45c8e/.book';
import Cover from '../../../../../../.claude/.conversations/claude--library-semantics-in-srt--fbc45c8e/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--library-semantics-in-srt--fbc45c8e/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--library-semantics-in-srt--fbc45c8e/.table';
import June2620261 from '../../../../../../.claude/.conversations/claude--library-semantics-in-srt--fbc45c8e/1-june-26-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {June2620261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
