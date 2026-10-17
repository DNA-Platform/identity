import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--unifying-srt-axioms-with-symbolization--9854c96a/.book';
import Cover from '../../../../../../.claude/.conversations/claude--unifying-srt-axioms-with-symbolization--9854c96a/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--unifying-srt-axioms-with-symbolization--9854c96a/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--unifying-srt-axioms-with-symbolization--9854c96a/.table';
import May3120261 from '../../../../../../.claude/.conversations/claude--unifying-srt-axioms-with-symbolization--9854c96a/1-may-31-2026';
import June120262 from '../../../../../../.claude/.conversations/claude--unifying-srt-axioms-with-symbolization--9854c96a/2-june-1-2026';
import June220263 from '../../../../../../.claude/.conversations/claude--unifying-srt-axioms-with-symbolization--9854c96a/3-june-2-2026';
import June320264 from '../../../../../../.claude/.conversations/claude--unifying-srt-axioms-with-symbolization--9854c96a/4-june-3-2026';

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
