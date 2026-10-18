import { $ } from '@dna-platform/chemistry';
import { opened } from '../../../opened';
import $Book from '../../../../../../.claude/.conversations/claude--formal-abstractions-using-sketches-and-srt--ac686866/.book';
import Cover from '../../../../../../.claude/.conversations/claude--formal-abstractions-using-sketches-and-srt--ac686866/.cover';
import Synopsis from '../../../../../../.claude/.conversations/claude--formal-abstractions-using-sketches-and-srt--ac686866/.synopsis';
import Table from '../../../../../../.claude/.conversations/claude--formal-abstractions-using-sketches-and-srt--ac686866/.table';
import September1020261 from '../../../../../../.claude/.conversations/claude--formal-abstractions-using-sketches-and-srt--ac686866/1-september-10-2026';

const Book = $($Book);

export const book = () => (
    <Book>
        {Cover()}
        {Synopsis()}
        {Table()}
        {September1020261()}
    </Book>
);

if (import.meta.hot) import.meta.hot.accept(next => { if (next !== undefined) opened.open(next.book); });
