import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/unifying-srt-axioms-with-symbolization/.book';
import Cover from '../../../../../../.claude/.conversations/unifying-srt-axioms-with-symbolization/.cover';
import Synopsis from '../../../../../../.claude/.conversations/unifying-srt-axioms-with-symbolization/.synopsis';
import Table from '../../../../../../.claude/.conversations/unifying-srt-axioms-with-symbolization/.table';
import May3120261 from '../../../../../../.claude/.conversations/unifying-srt-axioms-with-symbolization/1-may-31-2026';
import June120262 from '../../../../../../.claude/.conversations/unifying-srt-axioms-with-symbolization/2-june-1-2026';
import June220263 from '../../../../../../.claude/.conversations/unifying-srt-axioms-with-symbolization/3-june-2-2026';
import June320264 from '../../../../../../.claude/.conversations/unifying-srt-axioms-with-symbolization/4-june-3-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {May3120261()}
        {June120262()}
        {June220263()}
        {June320264()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
